import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Projects",
		component: () => import("@/views/Projects.vue")
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("@/views/Login")
	},
	{
		path: "/project",
		name: "Project",
		component: () => import("@/views/Project")
	},
	{
		path: "/user",
		name: "User",
		component: () => import("@/views/User")
	}
];

const router = new VueRouter({
	routes
});

export default router;
