import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Home from "./pages/TheHome.vue";
import Shop from "./pages/TheShop.vue";
import NoteFound from "./pages/TheNotFound.vue";
import Product from './pages/TheProduct.vue'

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    
    {
      path: "/shop",
      name: "shop",
      component: Shop,
    },
    {
      path: "/shop/:id",
      name: "product",
      component: Product,
    },
    {
      path: "*",
      name: "noteFound",
      component: NoteFound,
    },
  ],
});
