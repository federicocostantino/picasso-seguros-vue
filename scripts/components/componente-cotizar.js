Vue.component('componente-cotizar', {
	data() {
		return {
			img_src: "resources/datosa.svg",
			img_alt: "Imagen representativa de un auto",
			form_data: {
				email: null,
				marca: null,
				anio: null,
				modelo: null,
				cochera: null,
				gnc: null,
			},
			arr: [], // Guardamos la información del cliente
			errores: [], // Guardamos los errores de validación
			submitted: false,
			
			// Configuración v-form
			valid: true,
		    modeloRules: [
		      v => !!v || 'Debe ingresar la Marca del vehículo',
		      //v => (v && v.length > 3) || 'La marca debe tener mas de 3 caracteres',
		    ],
		    emailRules: [
		      v => !!v || 'Debe ingresar un E-mail para que podamos comunicarnos con usted',
		      v => /.+@.+\..+/.test(v) || 'Debe ingresar un E-mail válido',
		    ],
		    select: null,
		    aMarcas: [
		      'Ford',
		      'Fiat',
		      'Renault',
		      'Chevrolet',
		    ],
		    aAnios: ['1974','1975','1976','1977','1978','1979','1980','1981','1982','1983','1984','1985','1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021'],
		    aSiNo: ['Si','No'],
		    checkbox: false,
		};
	},

	template: `
		<div>
			<section class="section_1">
				<p>
					<img v-bind:src="img_src" v-bind:alt="img_alt"/>
					¡Hola! Para proteger tu auto necesitamos algunos datos:
				</p>
			</section>

			<v-form ref="form" v-model="valid" lazy-validation>
				<!-- E-mail -->
				<v-text-field v-model="form_data.email" :rules="emailRules" label="E-mail" required></v-text-field>

				<!-- Marca -->
				<v-select v-model="form_data.marca" :items="aMarcas" :rules="[v => !!v || 'Debe seleccionar la Marca de su vehículo']" label="Marca" required></v-select>

				<!-- Año -->
				<v-select v-model="form_data.anio" :items="aAnios" :rules="[v => !!v || 'Debe seleccionar el Año de su vehículo']" label="Año" required></v-select>

				<!-- Modelo -->
				<v-text-field v-model="form_data.modelo" :counter="50" :rules="modeloRules" label="Modelo" required></v-text-field>

				<!-- Cochera -->
				<v-select v-model="form_data.cochera" :items="aSiNo" :rules="[v => !!v || 'Debe seleccionar si guarda su vehículo en cochera']" label="¿Cochera?" required></v-select>

				<!-- GNC -->
				<v-select v-model="form_data.gnc" :items="aSiNo" :rules="[v => !!v || 'Debe seleccionar si su vehículo posee GNC']" label="¿Cochera?" required></v-select>

				<v-checkbox v-model="checkbox" :rules="[v => !!v || 'Debe seleccionar si es un humano o no ;)']" label="Soy un humano" required></v-checkbox>

				<v-btn :disabled="!valid" color="success" class="mr-4" class="button_home" @click="guardar">Enviar</v-btn>

				<v-btn color="error" class="mr-4" @click="reset" class="button_home">Resetear formulario</v-btn>

			</v-form>
		</div>
	`,
	methods: {
		guardar() {
			/*// Validación
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
				};*/
				/*
						Anotación al docente.
						En este caso, no necesito guardar varios datos en LocalStorage, sólo necesito guardar 1 dato. Por lo tanto, no necesito hacer la verificación de si hay o no información en LocalStorage.
				*/
			/*	localStorage.removeItem("dato");
				this.arr.push(info);
				localStorage.setItem("dato",JSON.stringify(this.arr));

				this.$router.push("/informacion");
			*/

			if(this.$refs.form.validate()) {
				// Creamos la variable "info" donde vamos a guardar la información ingresada por el usuario.
				info = {
					email: this.form_data.email,
					marca: this.form_data.marca,
					anio: this.form_data.anio,
					modelo: this.form_data.modelo,
					cochera: this.form_data.cochera,
					gnc: this.form_data.gnc,
				};

				// Borramos la clave "dato" de LocalStorage y guardamos "arr" en LocalStorage con la clave "dato".
				localStorage.removeItem("dato");
				this.arr.push(info);
				localStorage.setItem("dato",JSON.stringify(this.arr));

				// Redireccionamos a la seccíón "informacion" donde mostramos los datos ingresados por el usuario.
				this.$router.push("/informacion");
			};
		},
	    reset() {
	      this.$refs.form.reset()
	    },
	},
});