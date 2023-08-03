// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // @ts-ignore
  devtools: { enabled: false },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/_variables.css";',
        },
      },
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    "@huntersofbook/naive-ui-nuxt",
    // 引入 Pinia
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // 自动引入 `defineStore(), storeToRefs()`
          "defineStore",
          "storeToRefs"
        ],
      },
    ]
  ],
  // 配置一些项目需要的公共变量
  // 这些变量是响应式的，不仅在运行时可以访问，还可以改变
  appConfig: {
    title: 'Yuki-雪落下的声音',
    theme: {
      dark: true,
      colors: {
        primary: '#ff0000'
      }
    }
  },
  /*
  * Nuxt 配置中有一个运行时配置 `runtimeConfig` 可用于对外暴露值，就像环境变量、秘钥等。默认情况下这些 key 只能用于服务端，除非把
    key 存储在 `runtimeConfig.public` 字段中。跟 `appConfig` 比起来，它们只能在 nuxt.config
    中定义，值可以被环境变量覆盖，且不能在运行时修改。
    结合 dotenv 可以配置环境变量并覆盖 runtimeConfig 中的对应项，创建 .env 文件:
    NUXT_API_SECRET=api_secret_token
    NUXT_PUBLIC_API_BASE=https://nuxt3.cn
    以上这两项会覆盖 apiSecret, apiBase,
  * */
  runtimeConfig: {
    // 只能用于服务端的 keys
    apiSecret: '123',
    // 可用于客户端的 keys
    public: {
      apiBase: '/api'
    }
  },
  // 该选项主要设置自动导入，例如前面的 store 目录就可以通过配置该选项，避免用户每次使用时手动导入。
  imports: {
    dirs: ['store']
  },
  // 通过 `app.head` 可以全局配置网站页头信息：
  // 在其他页面可以通过 useHead 全局hooks修改当前页面的标题
  app: {
    head: {
      charset: 'utf-8', // 快捷方式
      // viewport: 'width=device-width, initial-scale=1', // 快捷方式
      title: '星白凛のNuxt 全站之旅',
      meta: [
        { name: 'description', content: '专注于前端技术分享' },
        { name: "keywords", content: "nuxt,vue,ts,frontend" },
        { name: 'charset', content: 'utf-8' },
      ],
      "link": [],
      "style": [],
      "script": []
    }
  },
  // 修改预设为 `vercel` 发布
  nitro: {
    preset: 'vercel'
  }
})
