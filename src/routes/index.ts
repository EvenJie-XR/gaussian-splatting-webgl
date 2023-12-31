import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue"
import YiZi from "../pages/YiZi.vue"
import Garden from "../pages/Garden.vue"
import JiaoShiYiZi from "../pages/JiaoShiYiZi.vue"
import JiaoShi from "../pages/JiaoShi.vue"
import HuaTuan from "../pages/HuaTuan.vue"
import ShuBiao from "../pages/ShuBiao.vue"
import DiYiDiErPai from "../pages/DiYiDiErPai.vue"
import LouDao from "../pages/LouDao.vue"
import LZLX from "../pages/LZLX.vue"
import Test from "../pages/Test.vue"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/yizi',
            component: YiZi
        },
        {
            path: "/garden",
            component: Garden
        },
        {
            path: '/jiaoshiyizi',
            component: JiaoShiYiZi
        },
        {
            path: '/jiaoshi',
            component: JiaoShi
        },
        {
            path: '/huatuan',
            component: HuaTuan
        },
        {
            path: '/shubiao',
            component: ShuBiao
        },
        {
            path: '/diyidierpai',
            component: DiYiDiErPai
        },
        {
            path: '/loudao',
            component: LouDao
        },
        {
            path: '/lzlx',
            component: LZLX
        },
        {
            path: '/test',
            component: Test
        }
    ]
})

export {
    router
}