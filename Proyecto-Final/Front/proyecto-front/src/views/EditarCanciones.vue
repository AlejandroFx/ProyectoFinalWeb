<template>
  <div>
      <h1>Edición de Canciones</h1>
      <p>ID de la Canción a Editar: {{ $route.params.id }}</p>
      <p>Titulo de la Canción a Editar: {{ $route.params.titulo }}</p>
      <p>Genero de la Canción a Editar: {{$route.params.genero}}</p>
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

           
           <b-button variant="primary" type="submit" class="float-right mt-3">
               Guardar la Edición
            </b-button>
       </b-form>
  </div>
</template>

<script>
import Vue from 'vue'
import {mapActions} from 'vuex'
import Input from '../components/Input'
export default {
    name: 'EditarCanciones',
    components: {
        Input
    },
    data() {
        return {
            cancion: {
                titulo: '',
                artista: '',
                año: '',
                 },
            erroresValidacion: false
        }
    },
     methods: {
        ...mapActions(['editarCanciones']),
        guardarCanciones(){
             console.log(this.$route.params.titulo)
            if(this.validacionCanciones) {
                this.erroresValidacion = false;
                this.editarCanciones({
                    titulo: this.$route.params.titulo,
                    params: this.cancion,
                    onComplete: (response) => {
                        console.log(response)
                        this.$notify({
                            type: 'success',
                            title: response.data.mensaje
                        }),
                       
                        this.$router.push({
                            name: 'Canciones'
                        })
                     
                    },
                    onError: (error) => {
                        this.$notify({
                            type: 'error',
                            title: error.response.data.mensaje
                        })
                    }
                })
            } else {
                this.erroresValidacion = true;
            }
        }
    },
    computed: {
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
    }
}
</script>

<style>
</style>

