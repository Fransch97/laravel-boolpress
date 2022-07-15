
import Vue from "vue";

import VueRouter from "vue-router";

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
        {
            path : "/post/:slug",
            name: "show",
            component: ()=> import('./components/pages/ShowComp')
        },
        {
            path : "/error-like",
            name : "errLike",
            component: ()=> import('./components/errors/ErrorComp')
        },
        {
            path : "*",
            component: ()=> import('./components/errors/ErrorSite')
        },


    ]
})

export default router
