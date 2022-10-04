import { createRouter, createWebHistory } from 'vue-router'
import PhoneLink from '../views/phoneLink.vue';
import Login from '../views/Login.vue';
import Verification from '../views/verification.vue';
import EmailLink from '../views/emailLink.vue';
import Zeke from '../views/Zeke.vue';
import Birthdate from '@/views/Birthdate.vue';
import Country from '@/views/Country.vue'
import Nickname from '@/views/Nickname.vue';
import Gender from '@/views/Gender.vue';
import InfoAdded from '@/views/InfoAdded.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/verification',
      name: 'Verification',
      component: Verification
    },
    {
      path: '/phoneLink',
      name: 'phoneLink',
      component: PhoneLink
    },
    {
      path: '/emailLink',
      name: 'emailLink',
      component: EmailLink
    },
    {
      path: '/Zeke',
      name: 'Zeke',
      component: Zeke
    },
    {
      path: '/Nickname',
      name: 'Nickname',
      component: Nickname
    },
    {
      path: '/Birthdate',
      name: 'Birthdate',
      component: Birthdate
    },
    {
      path: '/Country',
      name: 'Country',
      component: Country
    },
    {
      path: '/Gender',
      name: 'Gender',
      component: Gender
    },
    {
      path: '/InfoAdded',
      name: 'InfoAdded',
      component: InfoAdded
    },

  ]
})

export default router
