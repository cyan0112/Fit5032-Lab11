import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import FireRegisterView from '@/views/FirebaseRegisterView.vue'
import FireLoginView from '../views/FirebaseSigninView.vue'
import WeatherCheckView from '@/views/WeatherView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import HomeView from '@/components/LibraryRegistrationForm.vue'
import CountBookView from '@/views/CountBookAPI.vue'
import GetAllBookView from '@/views/GetAllBookApi.vue'

const routes = [
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FireLoginView
  },
  {
    path: "/FireRegister",
    name: "FireRegister",
    component: FireRegisterView
  },
  {
    path: '/',
    name: 'About',
    component: AboutView,
    meta: { requiresAuth: true }
  },
  {
    path: '/WeatherCheck',
    name: 'WeatherCheck',
    component: WeatherCheckView
  },
  {
    path: '/ContactUs',
    name: 'ContactUs',
    component: ContactUsView
  },
  {
    path: '/Home',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/CountBook',
    name: 'CountBook',
    component: CountBookView
  },
  {
    path: '/GetAllBookApi',
    name: 'GetAllBookApi',
    component: GetAllBookView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router