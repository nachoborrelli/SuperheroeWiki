import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SearchView from '../views/SearchView.vue'
import SearchSelect from '../views/SearchSelect.vue'
import SuperheroDetail from '../views/SuperheroDetail.vue'
import Favorites from '../views/Favorites.vue'
import BottomBar from '../components/BottomBar.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    components:{
        default: Home,
        bar:BottomBar
    } 
  },
  {
    path: '/',
    name: 'searchView',
    components:{
        default: SearchView,
        bar:BottomBar
    } 
  },
  {
    path: '/search/:input',
    name: 'searchSelect',
    components:{
      default: SearchSelect,
      bar:BottomBar
    } 
  },
  {
    path: '/superhero/:id',
    name: 'superheroDetail',
    components:{
      default: SuperheroDetail,
      bar:BottomBar
    } 
  },
  {
    path: '/favorites',
    name: 'favorites',
    components:{
      default: Favorites,
      bar:BottomBar
    } 
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
