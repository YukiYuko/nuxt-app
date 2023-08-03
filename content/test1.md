---
title: 创建服务端 API
---
# 创建服务端 API
Nuxt 项目下`~/server/api`目录下的文件会被注册为服务端
API，并约定在这些文件中导出一个默认函数`defineEventHandler(handler)`，handler 中可以直接返回 JSON 数据或
