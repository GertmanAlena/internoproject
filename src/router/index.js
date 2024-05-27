
import IndexPage from "@/pages/IndexPage.vue";
import BlogDetailsPage from "@/pages/BlogDetailsPage.vue";
import ErrorPage from '@/pages/ErrorPage.vue'
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: IndexPage
        },
        {
            path: '/blogDetails*',
            name: 'BlogDetailsPage',
            component: BlogDetailsPage
        },
        {
            path: '/404',
            name: 'error',
            component: ErrorPage
        },
        {
            path: '*',
            redirect: '/404'
        }
        
    ]
})