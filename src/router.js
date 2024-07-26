// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import TheMatrixPage from './views/TheMatrixPage.vue'


const routes = [
  { path: '/', component: TheMatrixPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router