Vue.component('componente-home', {
	data() {
		return {
			img_src: "resources/compania-seguros.svg",
			img_alt: "Cotizá tu seguro online",
		};
	},
	template: `
		<div class="div_home">
			<section>
				<h2>No des más vueltas</h2>
				<p><span v-bind:class="['bold']">Contratá hoy</span> el seguro de tu auto de forma 100% online.</p>
				<button v-on:click="mandarCotizar" v-bind:class="['button_home','bold']">ENTRÁ, COTIZÁ Y CONTRATÁ</button>
			</section>
			<img v-bind:src="img_src" v-bind:alt="img_alt"/>
		</div>
	`,

	methods: {
		mandarCotizar() {
			this.$router.push("/cotizar");
		},
	},
});