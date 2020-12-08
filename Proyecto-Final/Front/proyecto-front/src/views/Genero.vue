<template>
  <div>
 <h1>Géneros Músicales</h1>
  <b-button to="/agregar-genero"  variant="warning" class="boton">Agregar Género</b-button>
  
 
 <Tabla :campos="campos" :items="allGeneros">
    <template slot="actions" slot-scope="{ item }">
       
        <b-button
          @click="onEliminar(item)"
          variant="danger"
          class="ml-2"
        >
          Eliminar este Género
        </b-button>
      </template>
 </Tabla>
  </div>
</template>

<script>
import Tabla from '../components/Tabla'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Genero',
  components: {
    Tabla
  },
   data() {
    return {
      campos: [
        { key: 'id', label: 'ID' },
        { key: 'genero', label: 'Genero'},
        { key: 'actions', label: 'Acciones'}
      ]
    }  
  },
  computed: {
    ...mapGetters(['allGeneros'])
  },
  methods: {
    ...mapActions(['setGeneros', 'eliminarGenero']),
    
    onEliminar(item) {
      console.log(item)
        this.$bvModal.msgBoxConfirm('Se eliminará este Genero', {
          title: '¿Esta seguro que desea eliminar?',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'Aceptar',
          cancelTitle: 'Cancelar',
          centered: true
        })
          .then(value => {
            if(value) {
              this.eliminarGenero({
              genero: item.item.genero,
              onComplete: (response) => {
                  console.log(response)
                  this.$notify({
                      type: 'success',
                      title: response.data.mensaje
                  })
                  setTimeout(() => this.setGeneros(), 1000)
                },
              onError: (error) => {
                  this.$notify({
                      type: 'error',
                      title: error.response.data.mensaje
                  })
                }
            })
            }
          
          })
          .catch(err => {
          // An error occurred
          })
    }
},
mounted() {
    this.setGeneros();
  }
}
</script>

<style>
h1{
  padding-top: 30px;
  font-weight: bold;
  color: darkslateblue;
}
b-button{
  background-color: #f6f87e;
  border-color: darkslateblue;
  color: darkslateblue;
  font-weight: bold;
  border-radius: 8px;
}

</style>