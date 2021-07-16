import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Form",
    meta: { layout: 'form' },
    component: ()=>import('../views/Form.vue'),
  },
  {
    path: "/successform",
    name: "SuccessForm",
    meta: { layout: 'form' },
    component: ()=>import('../views/SuccessForm.vue'),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
