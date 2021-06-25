Vue.component('componente-informacion', {
	data() {
		return {
			arr: [],
		};
	},

	template: `
		<div class="div_informacion">
			<h2>Su mensaje ha sido enviado con éxito.</h2>
			<p>Nuestros representantes se comunicarán a la brevedad para contarle sobre todos nuestros beneficios</p>

			<section class="section_informacion">
				<h3 style="text-decoration:underline;">Información enviada</h3>
				<v-card class="mx-auto" max-width="400" tile>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title>E-mail</v-list-item-title>
						<v-list-item-subtitle>{{this.arr[0].email}}</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>

				<v-list-item two-line>
					<v-list-item-content>
						<v-list-item-title>Marca del vehículo</v-list-item-title>
						<v-list-item-subtitle>{{this.arr[0].marca}}</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>

				<v-list-item three-line>
					<v-list-item-content>
						<v-list-item-title>Año del vehículo</v-list-item-title>
						<v-list-item-subtitle>{{this.arr[0].anio}}</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>

				<v-list-item four-line>
					<v-list-item-content>
						<v-list-item-title>Modelo del vehículo</v-list-item-title>
						<v-list-item-subtitle>{{this.arr[0].modelo}}</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>

				<v-list-item five-line>
					<v-list-item-content>
						<v-list-item-title>Poseé cochera</v-list-item-title>
						<v-list-item-subtitle>{{this.arr[0].cochera}}</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>

				<v-list-item six-line>
					<v-list-item-content>
						<v-list-item-title>Poseé GNC</v-list-item-title>
						<v-list-item-subtitle>{{this.arr[0].gnc}}</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
			</v-card>
				
			</section>
			<button class="button_home" v-on:click="mandarHome">Volver a la Home</button>
			<button class="button_home" v-on:click="mandarCotizar">Cotizar nuevamente</button>
		</div>
	`,

	beforeMount() {
		this.ver_local();
		console.log(this.arr[0].anio);
	},

	methods: {
		mandarHome() {
			this.$router.push("/");
		},
		mandarCotizar() {
			this.$router.push("/cotizar");
		},
		ver_local() {
			if(localStorage.dato) {
				this.arr = JSON.parse(localStorage.getItem("dato"));
			}
		}
	},
});