import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from '../views/Nav.vue'
import Index from '../views/Index.vue'
import Classify from '../views/Classify.vue'
import Near from '../views/Near.vue'
import Buy from '../views/Buy.vue'
import Mine from '../views/Mine.vue'
import '../assets/js/index'


Vue.use(VueRouter)

//需要全局引入的 在main.js中 比如vant , axios
//全局引入axios后直接用 就可以 在组件文件中直接this.axios.get就可有 不需要在index.js中引入外部接口的自己写的那个js文件
const routes = [
  {
    path: '/',
    redirect:'/Nav',
    name: 'index',
    component: Index,
    children:[
      {
        name:'classify',
        path:'Classify',
        component: Classify
      },
      {
        name:'near',
        path:'Near',
        component: Near
      },
      {
        name:'buy',
        path:'Buy',
        component: Buy
      },
      {
        name:'mine',
        path:'Mine',
        component: Mine
      },
      {
        name:'nav',
        path:'Nav',
        component: Nav
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
