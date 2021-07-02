Vue.component('componente-home', {
	data() {
		return {
			colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'resources/slider-1.jpg',
        'resources/slider-2.jpg',
        'resources/slider-4.jpg',
      ],
		};
	},
	template: `
		<div class="div_home">
			<!--
			<section>
				<h2>No des más vueltas</h2>
				<p><span v-bind:class="['bold']">Contratá hoy</span> el seguro de tu auto de forma 100% online.</p>
				<button v-on:click="mandarCotizar" v-bind:class="['button_home','bold']">ENTRÁ, COTIZÁ Y CONTRATÁ</button>
			</section>
			<img v-bind:src="img_src" v-bind:alt="img_alt"/>
			-->
			<section class="section_carousel">
				<v-carousel :show-arrows="false" cycle height="400" hide-delimiter-background show-arrows-on-hover>
					<v-carousel-item v-on:click="mandarCotizar" v-for="(slide, i) in slides" :key="i" :src="slides[i]"></v-carousel-item>
				</v-carousel>
			</section>

			<section class="section_home_2">
				<h2>Nuestros seguros</h2>
				<p>Descubrí las coberturas y servicios que tenemos para vos</p>
				<button v-on:click="mandarCotizar" v-bind:class="['button_home','bold']">ENTRÁ, COTIZÁ Y CONTRATÁ</button>
			</section>
		</div>
	`,

	methods: {
		mandarCotizar() {
			this.$router.push("/cotizar");
		},
	},
});