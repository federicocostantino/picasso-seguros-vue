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
				<ul>
					<li><span v-bind:class="['bold']">Marca:</span> {{this.arr[0].marca}} </li>
					<li><span v-bind:class="['bold']">Año:</span> {{this.arr[0].anio}} </li>
					<li><span v-bind:class="['bold']">Modelo:</span> {{this.arr[0].modelo}} </li>
					<li><span v-bind:class="['bold']">Poseé cochera:</span> {{this.arr[0].cochera}} </li>
					<li><span v-bind:class="['bold']">Poseé GNC:</span> {{this.arr[0].gnc}} </li>
				</ul>
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