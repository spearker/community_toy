import {createWebHistory, createRouter} from "vue-router";
import ListPage from "@/components/List/ListPage";
import DetailPage from "@/components/Detail/DetailPage";

const routes = [
    {
        path: '/',
        component: ListPage
    },
    {
        path: '/detail/:id',
        component: DetailPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
