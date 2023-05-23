import { defineConfig, loadEnv } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'

const { resolve } = require('path')

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      viteCompression({
        threshold: 8000 // 对大于 8k 的文件进行压缩 需要更改大小可以自己进行换算
      })
    ],
    server: {
      host: '127.0.0.1',
      port: 9000,
      strictPort: true, // 端口被占用直接退出
      https: false,
      open: true, // 在开发服务器启动时自动在浏览器中打开应用程序
      proxy: {
        // '/api': {
        //   target: 'http://localhost:3031', // 代理的目标地址
        //   changeOrigin: true // 开发模式，默认的origin是真实的 origin:localhost:3000 代理服务会把origin修改为目标地址
        // },
        // 字符串简写写法
        '/api': {
          target:
            mode === 'development'
              ? loadEnv(mode, process.cwd()).VITE_APP_DEV_URL
              : loadEnv(mode, process.cwd()).VITE_APP_PROD_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    // 引入全局css⬇️！！！！
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/style/variable.scss" as *;'
        }
      }
    }
  })
}
