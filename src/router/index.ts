import { createRouter, createWebHistory } from 'vue-router'
import PubList from '@/views/publish/PubList.vue'
import TypoPage from '@/views/publish/TypoPage.vue'
import FlexPage from '@/views/publish/FlexPage.vue'

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
    },
    {
      path:'/flex',
      component: FlexPage,
    }
  ]
})

export default router