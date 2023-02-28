import { createRouter, createWebHashHistory } from "vue-router";

import TheHome from './pages/TheHome.vue'
import TheMission from './pages/TheMission.vue'
import TheSolutions from './pages/TheSolutions.vue'
import ThePricing from './pages/ThePricing.vue'
import TheKnowledge from './pages/TheKnowledge.vue'
import TheLogin from './pages/TheLogin.vue'
import TheJoin  from './pages/TheJoin.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: TheHome },
    { path: "/mission", component: TheMission },
    { path: "/solution", component: TheSolutions },
    { path: "/pricing", component: ThePricing },
    { path: "/knowledge", component: TheKnowledge },
    { path: "/login", component: TheLogin },
    { path: "/join", component: TheJoin },
  ],
});

export default router;
