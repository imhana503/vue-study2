import { createRouter, createWebHistory } from 'vue-router'
import PubList from '@/views/publish/PubList.vue'
import TypoPage from '@/views/publish/TypoPage.vue'
import FlexPage from '@/views/publish/FlexPage.vue'
import BadgePage from '@/views/publish/BadgePage.vue'
import BoxPage from '@/views/publish/BoxPage.vue'
import TogglePage from '@/views/publish/TogglePage.vue'
import LabelPage from '@/views/publish/LabelPage.vue'

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
    },
    {
      path:'/badge',
      component: BadgePage,
    },
    {
      path:'/box',  
      component: BoxPage,
    },
    {
      path:'/toggle',
      component: TogglePage,
    },
    {
      path:'/label',
      component: LabelPage,
    }
  ]
})

export default router