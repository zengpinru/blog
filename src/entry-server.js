import { createApp } from './main'
import HttpError from './libs/toolclass/HttpError'

export default context => {
  // 因为有可能是异步路由钩子函数或组件,故要返回一个Promise
  // 便于服务器能够等待所有的内容在渲染前,就已经准备就绪
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()
    router.push(context.url)
    const meta = app.$meta()

    // 等待router将可能的异步组件和钩子函数解析完
    router.onReady(() => {
      // 获取所有匹配的路由
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents) {
        return reject(new HttpError({ message: 'not found', code: '404' }))
      }
      // 根据请求的url拿到匹配的组件,然后调用组件的asyncData函数进行数据的预加载
      Promise.all(matchedComponents.map(component => {
        if (component.asyncData) {
          return component.asyncData({ store, route: router.currentRoute })
        }
      })).then(() => {
        // 在所有预取钩子(preFetch hook) resolve 后，
        // 我们的 store 现在已经填充入渲染应用程序所需的状态。
        // 当我们将状态附加到上下文，
        // 并且 `template` 选项用于 renderer 时，
        // 状态将自动序列化为 `window.__INITIAL_STATE__`，并注入 HTML。
        context.state = store.state
        context.meta = meta

        // 抛出app实例,便于服务端渲染
        resolve(app)
      }).catch(reject)
    }, reject)
  })
}
