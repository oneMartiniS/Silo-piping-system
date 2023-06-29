import Vue from 'vue'
//1.导⼊
import VueRouter from 'vue-router'
import Login from '../views/login/Login.vue'//创建路由
import Home from '../views/home/Home.vue'
import Main from '../views/main/Main.vue'
import Warehouse from '../views/warehouse/Warehouse.vue'
import Modification from '../views/modification/Modification.vue'
import Outbound from '../views/outbound/Outbound.vue'
import Searchs from '../views/searchs/Searchs.vue'
import Vist from '../views/vist/Vist.vue'
import Inventory from '../views/inventory/Inventory.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'Main',
    component: Main,
    redirect:'/main',
    children: [
      {path: '/home',component: Home},
      {path: '/warehouse',component: Warehouse},
      {path: '/modification',component: Modification},
      {path:'/outbound',component:Outbound},
      {path:'/searchs',component:Searchs},
      {path:'/vist',component:Vist},
      {path:'/inventory',component:Inventory},
    ]
  },
  // 配置登陆页面的路由
  {
    path: '/login',
    name: 'login',
    component: Login
    
  }
]

const router = new VueRouter({
  routes
})

export default router



