import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { resolve } from "path"; // 引入方法

import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [ // 配置 @ 指代 src
      {
        find: "@",
        replacement: resolve(__dirname, "./src"),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/global.scss";',
      },
    },
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer
      ]
    }
  },
  //设置反向代理，跨域
  server: {
    // host: '0.0.0.0',//设置地址：http://localhost
    port: 4501, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域  
    proxy: {
      '/api': {
        target: 'http://localhost:5173/',//代理的地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')//这里的/需要转义
      }
    }
  },
});
