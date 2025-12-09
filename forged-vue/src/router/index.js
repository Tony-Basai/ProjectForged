import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/CompanyView.vue'),
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('../views/CatalogView.vue'),
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactsView.vue'),
    },
    {
      path: '/catalog/:id',
      name: 'cards',
      component: () => import('../views/ProductCardView.vue'),
      props: true,
    },
    {
      path: '/catalog/shoping',
      name: 'shoping',
      component: () => import('../views/ShoppingView.vue'),
    },
  ],

  scrollBehavior() {
    return { top: 0 };
  }
})

export default router
