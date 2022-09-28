import { createRouter, createWebHistory } from 'vue-router'
import phoneLink from '../views/phoneLink.vue';
import Login from '../views/Login.vue';
import emailLink from '../views/emailLink.vue';
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
      path: '/phoneLink',
      name: 'phoneLink',
      component: phoneLink
    },
    {
      path: '/emailLink',
      name: 'emailLink',
      component: emailLink
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
