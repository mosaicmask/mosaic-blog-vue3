import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// normalize.css所需引入项
import 'normalize.css'
// iconfonts所需引入项
import './assets/icons/iconfont.js'
import './assets/icons/iconfont.css'
import 'animate.css'
// 这块一定要加,否者会有部分动画无法执行
import 'animate.css/animate.compat.css'
// element-plus
import 'element-plus/dist/index.css'
// bootStrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
// 滚动插件
import vue3SeamlessScroll from 'vue3-seamless-scroll'

createApp(App).use(vue3SeamlessScroll).use(router).mount('#app')
