// Secciones.
const home = {
	template: `<componente-home></componente-home>`,
	name: "inicio",
};
const cotizar = {
	template: `<componente-cotizar></componente-cotizar>`,
	name: "cotizador"
};

const informacion = {
	template: `<componente-informacion></componente-informacion>`,
	name: "info"
};

// Mapeo de rutas.
const routes = [
	{
		path: "/",
		component: home,
	},
	{
		path: "/cotizar",
		component: cotizar,
	},
	{
		path: "/informacion",
		component: informacion,
	}
];

// Creamos la variable VueRouter.
const router = new VueRouter({
	routes,
});

// Instanciamos Vue.
const app = new Vue ({
	el: "#app",
	router,
	data: {
		h1: "picasso seguros",
	}
})