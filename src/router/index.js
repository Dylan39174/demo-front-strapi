import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RestaurantView from '../views/RestaurantView.vue'
import HotelView from '../views/HotelView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/restaurant',
    name: 'restaurant',
    component: RestaurantView
  },
  {
    path: '/hotel',
    name: 'hotel',
    component: HotelView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
