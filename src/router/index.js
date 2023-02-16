// Composables
import { createRouter, createWebHistory } from 'vue-router'
import UserDetail from '@/views/UserDetail.vue'
import RoadMaps from '@/views/RoadMaps.vue'
import RoadMapDetail from '@/views/RoadMapDetail.vue'
import Books from '@/views/Books.vue'
import BookDetail from '@/views/BookDetail.vue'
import ReservedBooks from "@/views/ReservedBooks.vue";
import LendingBooks from "@/views/LendingBooks.vue";
import ReturnedBooks from "@/views/ReturnedBooks.vue";
import MyBooks from "@/components/MyBooks";
import FavoriteRoadMaps from "@/views/FavoriteRoadMaps.vue"

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
    path: '/Books',
    component: Books
  },
  {
    path: '/RoadMaps',
    component: RoadMaps,
  },
  {
    path: '/RoadMapDetail/:id',
    component: RoadMapDetail
  },
  {
    path: '/UserDetail',
    component: UserDetail,
  },
  {
    path: '/BookDetail/:id',
    component: BookDetail
  },
  {
    path: '/ReservedBooks',
    component: ReservedBooks
  },
  {
    path: '/LendingBooks',
    component: LendingBooks
  },
  {
    path: '/ReturnedBooks',
    component: ReturnedBooks
  },
  {
    path: '/FavoriteRoadMaps',
    component: FavoriteRoadMaps,
  },
  {
    path: '/MyRoadMaps',
    component: FavoriteRoadMaps,
  },
  {
    path: '/CompletedMaps',
    component: FavoriteRoadMaps,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
