import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Dashboard from "../views/Dashboard.vue";
import Privacy from "../views/Privacy.vue";
import Account from "../views/Account.vue";


const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/dashboard', component: Dashboard },
    { path: '/privacy', component: Privacy },
    { path: '/account', component: Account },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
