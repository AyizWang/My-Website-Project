import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'

//css初始樣式
import './styles/common.scss'

//elementPlus
// import ElementPlus from 'element-plus'

//註冊進入動畫插件
import { enterAni } from '@/directives'

import axios from 'axios'

const app = createApp(App)
app.use(router)
// app.use(ElementPlus)
app.use(enterAni)
app.mount('#app')
