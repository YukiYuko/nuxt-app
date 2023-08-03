// 这个接口可以在视图层使用$fetch('/api/hello')请求

// 这个是必须要导出的默认函数
export default defineEventHandler((event) => {
  return {
    message: 'hello，nuxt3！'
  }
})
