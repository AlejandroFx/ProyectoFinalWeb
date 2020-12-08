<template>
  <div>
      <h1>Agregar Canción</h1>
       <b-form @submit.prevent="guardarCanciones">
           <Input 
                v-model="cancion.titulo"
                placeholder="Ingrese el Titulo de la Canción"
                id="genero"
                class="mb-2"
                maxlength="50"
                :error="erroresValidacion && !validacionCanciones"
                mensajeError="El Titulo es Obligatorio"
           />
             <Input 
                v-model="cancion.artista"
                placeholder="Ingrese nombre del Artista"
                id="genero"
                class="mb-2"
                maxlength="80"
                :error="erroresValidacion && !validacionCanciones"
                mensajeError="El Artista es obligatorio"
           />
             <Input 
                v-model="cancion.año"
                placeholder="Ingrese el año en el que salió la Canción"
                id="genero"
                class="mb-2"
                maxlength="4"
                :error="erroresValidacion && !validacionCanciones"
                mensajeError="El año es Obligatorio"
           />
            
            <p>Seleccione el Genero de la Canción</p>
            <div class="opcion">
            <select v-model="cancion.genero" class="form-control">
             <option class="opcion" v-for="generos in allGeneros" :key="generos.id" :genero="generos.genero">{{generos.genero}}</option>
               
            </select>
            </div>
           


           
           
           <b-button variant="warning" type="submit" >
               Agregar la Canción
            </b-button>
       </b-form>
  </div>
</template>

<script>
import Input from '../components/Input'
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'AgregarCancion',
    components: {
        Input
    },
    data() {
        return {
            cancion: {
                titulo: '',
                artista: '',
                año: '',
                genero: ''
                 },
            erroresValidacion: false
        }
    },
    methods: {
        ...mapActions(['crearCanciones', 'setGeneros']),
        guardarCanciones(){
            if(this.validacionCanciones) {
                this.erroresValidacion = false;
                this.crearCanciones({
                    params: this.cancion,
                    onComplete: (response) => {
                        console.log(response)
                        this.$notify({
                            type: 'success',
                            title: response.data.mensaje,
                        });
                        this.$router.push({
                            name: 'Canciones'
                        })
                    },
                    onError: (error) => {
                        this.$notify({
                            type: 'error',
                            title: error.response.data.mensaje,
                        });
                    }
                })
            } else {
                this.erroresValidacion = true;
            }
        }
    },
    computed: {
          ...mapGetters(['allGeneros']),
        validacionCanciones() {
            return (
                this.cancion.titulo !== undefined &&
                this.cancion.titulo.trim() !== '',
                this.cancion.artista !== undefined &&
                this.cancion.artista.trim() !== '',
                this.cancion.año !== undefined &&
                this.cancion.año.trim() !== ''
            )
        }
    },
    mounted(){
    this.setGeneros()
  }
}
</script>

<style>

</style>
