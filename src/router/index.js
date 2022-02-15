import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../components/Header.vue'
import Home from '../views/Home.vue'
import Team from '../views/Team.vue'
import Contact from '../views/Contact.vue'
import Service from '../views/Service.vue'
import Footer from '../components/Footer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Header',
    component: Header
  },
  {
    path: '/footer',
    name: 'Footer',
    component: Footer
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/service',
    name: 'Service',
    component: Service
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
