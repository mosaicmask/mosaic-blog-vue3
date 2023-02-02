import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

//路由数组的类型 RouteRecordRaw
// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../views/index.vue')
  },
  {
    path: '/photos',
    name: 'photos',
    component: () => import('../views/photos/index.vue'),
    redirect: '/photos/photography', //重定向到第一个子路由
    children: [
      {
        path: '/photos/photography',
        name: 'photography',
        component: () => import('../views/photos/photography/photography.vue')
      },
      {
        path: '/photos/photoItems/:id',
        name: 'photoItems',
        component: () => import('../views/photos/photoItems/photoItems.vue')
      }
    ]
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('../views/demo/demo.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/reptile',
    name: 'reptile',
    component: () => import('../views/reptile/reptile.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('../views/resume/resume.vue')
  },
  {
    path: '/notes',
    name: 'notes',
    component: () => import('../views/notes/index.vue'),
    redirect: '/notes/myNotes', //重定向到第一个子路由
    children: [
      {
        path: '/notes/myNotes',
        name: 'myNotes',
        component: () => import('../views/notes/myNotes/myNotes.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
