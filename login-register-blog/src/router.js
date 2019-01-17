
import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';


Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: "/login",
            component:Login
        },
        {
            path: "/register",
            component: Register
        }
    ]
});

export default router;