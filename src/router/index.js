import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '@/store'
import Home from '@/views/Home.vue'
import PlantManage from '@/views/PlantManage'
import User from '@/views/User'
import Login from '@/views/Login'
import Register from '@/views/Register'
import PlantDetail from '@/components/PlantDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: '/sort'
      },
      {
        path: '/tools',
        name: 'Tools',
        component: () => import('@/views/home/Tools.vue')
      },
      {
        path: '/sort',
        name: 'Sort',
        component: () => import('@/views/home/Sort.vue')
      },
      {
        path: '/square',
        name: 'Square',
        component: () => import('@/views/home/Square.vue')
      },
      {
        path: '/shop',
        name: 'Shop',
        component: () => import('@/views/home/Shop.vue')
      }
    ]
  },
  {
    path: '/plantManage',
    name: 'PlantManage',
    component: PlantManage,
    meta: { requireAuth: true }
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    meta: { requireAuth: true }

  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/plantDetail',
    name: 'Register',
    component: PlantDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局前置守卫，所有路由被访问时都要经过这里,用来判断是否登录
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 登录判断  to是即将进入的路由
    // if (store.state.token) { // vuex中是否存有token
    if (window.localStorage.getItem('token')) {
      next() // 跳转到目标路由
    } else {
      // 否则跳转到登录界面
      alert('请完成登录')
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})
export default router
