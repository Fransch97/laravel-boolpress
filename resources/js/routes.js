
import Vue from "vue";

import VueRouter from "vue-router";
import Home from "./components/pages/HomeComp"

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path : '/',
            name : 'home',
            component: ()=> import('./components/pages/HomeComp')
        },
        {
            path : "/about",
            name : "about",
            component: ()=> import('./components/pages/AboutComp')
        },
        {
            path : "/blog",
            name : "blog",
            component: ()=> import('./components/pages/BlogComp')
        },
        {
            path : "/contact",
            name : "contact",
            component: ()=> import('./components/pages/ContactComp')
        },

    ]
})

export default router
