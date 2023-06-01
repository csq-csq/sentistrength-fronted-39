import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index.vue'),
    redirect: '/home',
    children:[
      {path: 'home', name: 'Home', component: () => import('../views/Home.vue')},
      {path: 'sentiArgs', name: 'SentiArgs', component: () => import('../views/SentiArgs.vue')},
      {path: 'options', name: 'Options', component: () => import('../views/Options.vue')},
      {path: 'file', name: 'File', component: () => import('../views/File.vue')},
      {path: 'spider', name: 'Spider', component: () => import('../views/Spider')},
      {path: 'visualization', name: 'Visualization', component: () => import('../views/Visualization')},
      {path: 'issues', name: 'Issues', component: () => import('../views/Issues')}

    ]
  },

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
