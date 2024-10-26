import { createRouter, createWebHistory } from 'vue-router'

import { routes, handleHotUpdate } from 'vue-router/auto-routes';
console.log(routes);

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    base: import.meta.env.BASE_URL,
})

router.beforeEach((to, from, next) => {
    console.log('to', to);
    console.log('from', from);
    next()
});

if (import.meta.hot) {
    handleHotUpdate(router)
}

export default router
