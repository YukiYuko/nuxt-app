import fs from "fs";
import path from "path";
import matter from 'gray-matter';
import { remark } from "remark";
import html from "remark-html";

const postsDir = path.join(process.cwd(), "content");

export default defineEventHandler(async (event) => {
 // getRouterParam 内置获取路由参数的方法  比如: detail/[id]
 let id = getRouterParam(event, 'id');
 if (!id) {
  throw createError({
   statusCode: 400,
   message: 'ID 不存在',
  })
 }
 const fileName = id + ".md";
 // 获取文件的完全路径
 const fullPath = path.join(postsDir, fileName);
 try {
  const fileContent = fs.readFileSync(fullPath, "utf-8");
  // 解析扉页信息
  const matterInfo = matter(fileContent);
  // 转换markdown为HTML
  const processedContent = await remark().use(html).process(matterInfo.content);
  const content = processedContent.toString();
  return {
   title: matterInfo.data.title,
   content,
  }
 } catch (e) {
  throw createError({
   statusCode: 400,
   message: '文章不存在',
  })
 }
});

