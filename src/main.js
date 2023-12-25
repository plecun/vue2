import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/plugins/element.js'
import '@/assets/css/index.css'
import '@/assets/css/iconfont/iconfont.css'
import '@/assets/css/public-element.scss'
import VueWechatTitle from 'vue-wechat-title'
import VueCookies from 'vue-cookies'
import { deepClone, resetForm, throttle, debounce, formatDate} from '@/utils/index.js'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { formRule } from '@/utils/rule.js'

Vue.prototype.resetForm = resetForm // 表单重置
Vue.prototype.deepClone = deepClone //深克隆
Vue.prototype.formRule = formRule //自定义表单规则校验->里面没有的自己去添加
Vue.prototype.throttle = throttle //节流
Vue.prototype.debounce = debounce //防抖
Vue.prototype.formatDate = formatDate //时间格式化

Vue.config.productionTip = false

Vue.use(VueWechatTitle)
Vue.use(VueAwesomeSwiper)
Vue.use(VueCookies)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
