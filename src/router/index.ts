import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuestionsStep2 from '../views/QuestionFormStep2.vue'
import Recommendation from '@/views/Recommendation.vue'
import Report from '@/views/Report.vue'
import StudyPrograme from '@/views/StudyPrograme.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'questions',
      component: () => import('../views/QuestionForm.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: HomeView 
    },
    {
      path: '/step2',
      name: 'step2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: QuestionsStep2,
      props: true
    },
    {
      path: '/recommendation',
      name: 'recommendation',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Recommendation,
      props: true
    },
    {
      path: '/report',
      name: 'report',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Report,
      props: true
    },    
    {
      path: '/studyPrograme',
      name: 'studyPrograme',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: StudyPrograme,
      props: true
    }
  ]
})

export default router
