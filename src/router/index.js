import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        hideNavbar: true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta:{
        guest: true,
        hideNavbar: true,
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }        
    },
    
  ]
})

export default router
