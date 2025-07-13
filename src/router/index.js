import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Dashboard from "../views/Dashboard.vue";
import Privacy from "../views/Privacy.vue";
import Account from "../views/Account.vue";
import Review from "../views/Review.vue";


const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/dashboard', component: Dashboard },
    { path: '/privacy', component: Privacy },
    { path: '/account', component: Account },
    { path: '/review', component: Review },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
