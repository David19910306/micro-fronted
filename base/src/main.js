import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
  {
    name: 'subapp',
    entry: '//localhost:8081',
    container: '#micro-div',
    activeRule: '/subapp'
  }
])
// 启动 qiankun
start()

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
