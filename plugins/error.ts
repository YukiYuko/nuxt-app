//  Nuxt 提供的插件机制
export default defineNuxtPlugin((nuxtApp) => {
  // 获取vue 实例， 并通过官方的错误捕捉  app.config.errorHandler = (error, context) => {}
  nuxtApp.vueApp.config.errorHandler = (..._args) => {
    console.log('vue error handler')
  };

  /**
   * 还有一种处理方式，是利用 Nuxt 层级的钩子捕获来自 Vue 传播上来的错误。可用的钩子有两个：
   * app:error：整个应用层面的错误捕获；
   * vue:error：仅 Vue 层面的错误捕获。
   */
  nuxtApp.hook('app:error', (..._args) => {
    console.log('app:error----------------')
  })
  nuxtApp.hook('vue:error', (..._args) => {
    console.log('vue:error---------------')
  })
})
