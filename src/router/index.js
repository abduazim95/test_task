import Vue from 'vue'
import VueRouter from 'vue-router'

import Messages from '@/views/Messages.vue';
import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';

Vue.use(VueRouter)

const routes = [
    { path: '/messages', component: Messages },
    { path: '/login', component: Login },
    { path: '/', component: Home }
]

export default new VueRouter({
    routes
})