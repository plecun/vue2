import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import("@/views/main/index"),
    children: [
      {
        path: '/',
        name: 'Index',
        component: () => import('@/views/index/index'),
        meta: {
          headerType: "0",
          title: "首页",
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 进入所有页面返回顶部
router.beforeEach((to, from, next) => {
  if(to.name != "Index"){
    window.scroll(0, 0);
  }
  // if (to.meta.title) {
  //   document.title = to.meta.title
  // }
  // let token = localStorage.getItem('token')
  // let publicPath = ['/register', '/login', '/forgetPassword', '/userAgreement', '/privacyPolicy']
  // if (publicPath.indexOf(to.path) != -1) {
  //   next();
  // } else {
  //   if (token) {
  //     
  //   } else {
  //     window.location.href = '/login'
  //   }
  // }
  next();
})









export default router
