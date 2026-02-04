import { createRouter, createWebHistory } from 'vue-router'
import PubList from '@/views/publish/PubList.vue'
import TypoPage from '@/views/publish/TypoPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path:'/',
      name: 'publist',
      component: PubList,
    },
    {
      path:'/typo',
      component: TypoPage,
    }
  ]
})

export default router