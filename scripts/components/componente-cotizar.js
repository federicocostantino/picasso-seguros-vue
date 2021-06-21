Vue.component('componente-cotizar', {
	data() {
		return {
			img_src: "resources/datosa.svg",
			img_alt: "Imagen representativa de un auto",
			form_data: {
				marca: null,
				anio: null,
				modelo: null,
				cochera: null,
				gnc: null,
			},
			arr: [], // Guardamos la información del cliente
			errores: [], // Guardamos los errores de validación
			submitted: false, 
		};
	},

	template: `
		<div class="div_cotizar">
			
			<section class="section_1">
				<img v-bind:src="img_src" v-bind:alt="img_alt"/>
				<p>¡Hola! Para proteger tu auto necesitamos algunos datos:</p>
			</section>
			
			<section class="section_2">
				<form v-on:submit.prevent novalidate>
					<label>Marca*</label>
					<select v-model="form_data.marca">
		 				<option value="" disabled>Seleccione una marca</option>
			 			<option>Ford</option>
			  			<option>Fiat</option>
			  			<option>Renault</option>
			  			<option>Chevrolet</option>
					</select>
					
					<label>Año*</label>
					<input type="number" v-model.number="form_data.anio"/>

					<label>Modelo*</label>
					<input type="text" v-model="form_data.modelo"/>

					<label>¿Cochera?*</label>
					<select v-model="form_data.cochera">
						<option>Si</option>
						<option>No</option>
					</select>

					<label>¿GNC?*</label>
					<select v-model="form_data.gnc">
						<option>Si</option>
						<option>No</option>
					</select>

					<label>* Campo requerido</label>

					<button type="button" class="button_home" v-on:click="guardar" value="Enviar">Enviar</button>
				</form>
			</section>
				
			<transition-group tag="ul" class="section_errores" v-show="submitted" enter-active-class="animate__animated animate__bounceInLeft" leave-active-class=" animate__animated animate__backOutLeft">
				<li v-for="(x,index) in errores" :key="x">
					<span> {{x}} </span>
				</li>
			</transition-group>
			
		</div>
	`,
	methods: {
		guardar() {
			// Validación
			this.submitted = true;
			this.errores= [];

			if(!this.form_data.marca) {
				this.errores.push("Debe ingresar la marca del vehículo");
			};
			if(!this.form_data.anio) {
				this.errores.push("Debe ingresar el año del vehículo");
			};
			if(!this.form_data.modelo) {
				this.errores.push("Debe ingresar el modelo del vehículo");
			};
			if(!this.form_data.cochera) {
				this.errores.push("Debe seleccionar si guarda su vehículo en una cochera");
			};
			if(!this.form_data.gnc) {
				this.errores.push("Debe seleccionar si su vehículo posee GNC");
			};

			if(this.errores.length == 0) {
				info = {
					marca: this.form_data.marca,
					anio: this.form_data.anio,
					modelo: this.form_data.modelo,
					cochera: this.form_data.cochera,
					gnc: this.form_data.gnc,
				};
				/*
						Anotación al docente.
						En este caso, no necesito guardar varios datos en LocalStorage, sólo necesito guardar 1 dato. Por lo tanto, no necesito hacer la verificación de si hay o no información en LocalStorage.
				*/
				localStorage.removeItem("dato");
				this.arr.push(info);
				localStorage.setItem("dato",JSON.stringify(this.arr));

				this.$router.push("/informacion");
			};
		},
	},
});