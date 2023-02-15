// Composables
import { createRouter, createWebHistory } from 'vue-router'
import UserDetail from '@/views/UserDetail.vue'
import RoadMaps from '@/views/RoadMaps.vue'
import Books from '@/views/Books.vue'

const routes = [
  {
    path: '/',
    component: Books,
    // component: () => import(/* webpackChunkName: "home" */ '@/views/BookList.vue'),
    // children: [
    //   {
    //     path: '',
    //     name: 'BookList',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "home" */ '@/views/BookList.vue'),
    //   },
    // ],
  },
  {
    path: '/RoadMaps',
    component: RoadMaps,
  },
  {
    path: '/UserDetail',
    component: UserDetail,
  },
  { path: '/BookDetail/:id', component: () => import('@/views/BookDetail.vue') },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
