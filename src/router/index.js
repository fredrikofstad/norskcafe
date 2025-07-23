import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Dashboard from "../views/Dashboard.vue";
import Privacy from "../views/Privacy.vue";
import Account from "../views/Account.vue";
import Review from "../views/Review.vue";


const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login },
    { path: '/dashboard', name: 'dashboard', component: Dashboard },
    { path: '/privacy', name: 'privacy', component: Privacy },
    { path: '/account', name: 'account', component: Account },
    { path: '/review', name: 'review', component: Review }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
