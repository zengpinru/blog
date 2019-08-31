const Koa = require('koa')
const Router = require('koa-router')
const KoaStatic = require('koa-static')
const fs = require('fs')
const path = require('path')
const LRU = require('lru-cache')

const { createBundleRenderer } = require('vue-server-renderer')
const bundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

const resolve = file => path.resolve(__dirname, file)

const app = new Koa()
const router = new Router()

// 渲染
const renderer = createBundleRenderer(bundle, {
  cache: new LRU({
    max: 1000,
    maxAge: 1000 * 60 * 15
  }),
  runInNewContext: false,
  template: fs.readFileSync(resolve('./src/index.template.html'), 'utf-8'),
  clientManifest: clientManifest
})
function renderToString (context) {
  return new Promise((resolve, reject) => {
    renderer.renderToString(context, (err, html) => {
      if (err) {
        reject(err)
      } else {
        const { title, meta } = context.meta.inject()
        html = html.replace(/<title.*?<\/title>/g, title.text())
        html = html.replace(/<meta\s+.*?name="description".*?>/g, meta.text())
        resolve(html)
      }
    })
  })
}

// KoaStatic(resolve('./dist'))
// 开放dist目录
app.use(KoaStatic(resolve('./dist'), {
  maxAge: 1000 * 60 * 60 * 24 * 30
}))

app.use(async (ctx, next) => {
  const context = {
    url: ctx.url,
    title: ''
  }
  // 将 context 数据渲染为 HTML
  const html = await renderToString(context)
  ctx.body = html
})

// 启动路由
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => {
  console.log(`server started at localhost: 3000`)
})
