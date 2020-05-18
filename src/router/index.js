import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
	  {
	    path: '/search',
	    name: 'search',
	  	 component: () => import('../components/search.vue')
	  },
	  {
	    path: '/write',
	    name: 'write',
	  	 component: () => import('../components/write.vue')
	  },
	  {
	    path: '/personal',
	    name: 'personal',
	  	 component: () => import('../components/personal.vue')
	  }
]

const router = new VueRouter({
  routes
})

export default router
