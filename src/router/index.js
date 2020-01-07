import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store';

import Messages from '@/views/Messages.vue';
import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';

Vue.use(VueRouter)

const routes = [
    { 
        path: '/messages', 
        component: Messages,
        meta: { rule: 'authenticated' }
    },
    { 
        path: '/login', 
        component: Login,
        meta: { rule: 'anybody' }
    },
    { 
        path: '/', 
        component: Home,
        meta: { rule: 'anybody' }
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if (!store.getters.user.authenticated && to.meta.rule == 'authenticated') next('/login')
    else next()
})

export default router;