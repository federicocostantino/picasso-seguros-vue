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
	vuetify: new Vuetify({
		theme: {
			themes: {
				// Puede ser "light" o "dark".
				light: {
		       		primary: "#080EB8",
				    secondary: "#D5E915",
				    accent: "#795548",
				    error: "#f44336",
				    warning: "#ffeb3b",
				    info: "#00bcd4",
				    success: "#4caf50",
      			},
			},
		},
	}),
	data: () => ({
		h1: "picasso seguros",
	    // Configuración v-navigation-drawer (barra de navegación izquierda).
	    selectedItem: 1,
	    items: [
	    	{ path: '/', icon: 'mdi-home', titulo: 'Home' },
	    	{ path: '/cotizar', icon: 'mdi-star', titulo: 'Cotizar' },
	    ],
	    drawer: "",
    	group: null,
  	}),
  	methods: {
  		redirectHome() {
  			this.$router.push("/");
  		},
  	},
});