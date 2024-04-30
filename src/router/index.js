import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout/index.vue'
import Home from '../views/Home/index.vue'
import About from '../views/About.vue'
import Portfolio from '../views/Portfolio.vue'
import Contact from '../views/Contact.vue'
import PortfolioProject from '../views/PortfolioProject.vue'
import PortfolioDesign from '../views/PortfolioDesign.vue'
import PortfolioMedia from '../views/PortfolioMedia.vue'
import DesignDetail from '../views/DesignDetail.vue'
import MediaDetail from '../views/MediaDetail.vue'
import ProjectDetail from '../views/ProjectDetail.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    {
        path: "/",
        component: Layout,
        alias: "/Personal-Website",
        children: [
            {
                path: '',
                component: Home,
                meta: {
                    title: '王姿雅 Wang Zi-Ya - Personal Website'
                }
            },
            {
                path: '/about',
                component: About,
                meta: {
                    title: '關於我 About - 王姿雅 Wang Zi-Ya'
                }
            },
            {
                path: '/portfolio/project',
                component: Portfolio,
                meta: {
                    title: '作品集 Portfolio - 王姿雅 Wang Zi-Ya'
                },
                children: [
                    {
                        path: '/portfolio/project',
                        component: PortfolioProject,
                        meta: {
                            title: '專案作品 Project - 王姿雅 Wang Zi-Ya'
                        }
                    },
                    {
                        path: '/portfolio/design',
                        component: PortfolioDesign,
                        meta: {
                            title: '設計 Design - 王姿雅 Wang Zi-Ya'
                        }
                    },
                    {
                        path: '/portfolio/media',
                        component: PortfolioMedia,
                        meta: {
                            title: ' 影音/動畫 Media - 王姿雅 Wang Zi-Ya'
                        }
                    }
                ]
            },
            {
                path: '/portfolio/design/:id',
                component: DesignDetail,
                meta: {
                    title: '設計作品 - 王姿雅 Wang Zi-Ya'
                }
            },
            {
                path: '/portfolio/media/:id',
                component: MediaDetail,
                meta: {
                    title: '影音/動畫作品 - 王姿雅 Wang Zi-Ya'
                }
            },
            {
                path: '/portfolio/project/:id',
                component: ProjectDetail,
                meta: {
                    title: '專案作品 - 王姿雅 Wang Zi-Ya'
                }
            },
            {
                path: '/contact',
                component: Contact,
                meta: {
                    title: '聯絡資訊 Contact - 王姿雅 Wang Zi-Ya'
                }
            },
            {
                path: '/:pathMatch(.*)*',
                component: NotFound,
                meta: {
                    title: 'Not Found - 王姿雅 Wang Zi-Ya'
                }
            }
        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return {
            top: 0
        }
    },
})
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next();
})

export default router