<template>
  <div>
      <h1>Agregar Genero Musical</h1>
       <b-form @submit.prevent="guardarGenero">
           <Input 
                v-model="genero.genero"
                placeholder="Ingrese el nombre del Genero"
                id="genero"
                class="mb-2"
                maxlength="50"
                :error="erroresValidacion && !validacionGenero"
                mensajeError="El nombre del Genero es obligatorio"
           />
           
           <b-button variant="warning" type="submit" >
               Agregar
            </b-button>
       </b-form>
  </div>
</template>

<script>
import Input from '../components/Input'
import { mapActions } from 'vuex'
export default {
    name: 'AgregarGenero',
    components: {
        Input
    },
    data() {
        return {
            genero: {
                genero: '',
                 },
            erroresValidacion: false
        }
    },
    methods: {
        ...mapActions(['crearGeneros']),
        guardarGenero(){
            if(this.validacionGenero) {
                this.erroresValidacion = false;
                this.crearGeneros({
                    params: this.genero,
                    onComplete: (response) => {
                        console.log(response)
                        this.$notify({
                            type: 'success',
                            title: response.data.mensaje,
                        });
                        this.$router.push({
                            name: 'Genero'
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
        validacionGenero() {
            return (
                this.genero.genero !== undefined &&
                this.genero.genero.trim() !== ''
            )
        }
    }
}
</script>

<style>
</style>
