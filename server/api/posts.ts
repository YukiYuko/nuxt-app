// const fs = require("fs");
// const path = require("path");
// const matter = require("gray-matter");
import fs from "fs";
import path from "path";
import matter from 'gray-matter';


const sleep = (time = 3000) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("");
    }, time);
  })
}
// process.cwd() 是当前Node.js进程执行时的文件夹地址
// 文章目录
const postsDir = path.join(process.cwd(), "content");

export default defineEventHandler(async (event) => {
  // console.log("postsDir", postsDir); // D:\workspace\nuxt\nuxt3-app\content
  // 同步获取文件
  const fileNames = fs.readdirSync(postsDir);
  // console.log("fileNames", fileNames); //  [ 'test1.md', 'test2.md', 'test3.md' ]
  // 对获取到的文件进行处理
  const posts = fileNames.map((fileName: string) => {
    // 获取文件名作为文章标题
    const id = fileName.replace(/.md$/, "");

    // 获取文章标题和创建日期
    const fullPath = path.join(postsDir, fileName); // 获取文件的完全路径
    // 根据完全路径去获取文件里面的内容
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // 通过matter 处理文件的内容
    const matterInfo = matter(fileContents);
    // console.log("matterInfo", matterInfo);
    // 获取文件的相关信息，比如创建时间什么的
    const fileInfo = fs.statSync(fullPath);
    // console.log("fs.statSync", fileInfo);
    return {
      id,
      title: matterInfo.data.title,
      date: fileInfo.ctime,
    };
  });
  console.log(111);
  await sleep();
  console.log(222);
  // 降序排列
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
});

