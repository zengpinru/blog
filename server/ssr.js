const Koa = require('koa')
// const KoaStatic = require('koa-static')
// const KoaMount = require('koa-mount')
// const path = require('path')

// const resolve = file => path.resolve(__dirname, file)
const app = new Koa()

const router = require('./dev.ssr')

app.use(router.routes()).use(router.allowedMethods())

// 开放目录
// app.use(KoaMount('/dist', KoaStatic(resolve('../dist'))))
// app.use(KoaMount('/public', KoaStatic(resolve('../public'))))

app.listen(3000, () => {
  console.log(`server started at localhost: 3000`)
})

module.exports = app
