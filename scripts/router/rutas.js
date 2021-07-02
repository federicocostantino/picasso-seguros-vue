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
		       		primary: "#000000",
				    secondary: "#d93a3e",
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
    	icons: [
		    {icono:'mdi-facebook',src:'https://www.facebook.com'},
		    {icono:'mdi-twitter',src:'https://www.twitter.com'},
		    {icono:'mdi-linkedin',src:'https://www.linkedin.com/in/federicocostantino/'},
		    {icono:'mdi-instagram',src:'https://www.instagram.com'},
		],
  	}),
  	methods: {
  		redirectHome() {
  			this.$router.push("/");
  		},
  	},
});