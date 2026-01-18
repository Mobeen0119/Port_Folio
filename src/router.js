import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: () =>
            import ('./views/Home.vue'),
        meta: {
            title: 'Home'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('./views/About.vue'),
        meta: {
            title: 'About Me'
        }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () =>
            import ('./views/Contact.vue'),
        meta: {
            title: 'Contact'
        }
    },

    {
        path: '/projects',
        name: 'Projects',
        component: () =>
            import ('./views/Projects.vue'),
        meta: {
            title: 'Projects'
        },
        props: true
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'My Portfolio'
    next()
})

export default router