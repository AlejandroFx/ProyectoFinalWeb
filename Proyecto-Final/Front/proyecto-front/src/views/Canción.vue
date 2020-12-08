<template>
  <div>
 <h1>Canciones</h1>
  <b-button to="/agregar-cancion" variant="warning"  >Agregar Canción</b-button>
  
 
 <Tabla :campos="campos" :items="allCanciones">
    <template slot="actions" slot-scope="{ item }">

        <b-button
          @click="onEditar(item)"
          variant="outline-primary"
          class="ml-2"
        >
          Editar Canción
        </b-button>
       
        <b-button
          @click="onEliminar(item)"
          variant="danger"
          class="ml-3"
        >
          Eliminar esta Canción
        </b-button>
      </template>
  </Tabla>
  </div>
</template>

<script>
import Tabla from '../components/Tabla'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Canción',
  components: {
    Tabla
  },
   data() {
    return {
      campos: [
        { key: 'id', label: 'ID' },
        { key: 'titulo', label: 'Titulo'},
        { key: 'artista', label: 'Artista'},
        { key: 'año', label: 'Año'},
        { key: 'genero', label: 'Genero'},
        { key: 'actions', label: 'Acciones'}
      ]
    }  
  },
  computed: {
    ...mapGetters(['allCanciones'])
  },
  methods: {
    ...mapActions(['setCanciones', 'eliminarCanciones','editarCanciones']),

    onEditar(item) {
      console.log(item);
      this.$router.push({
        name: 'EditarCanciones',
        params: {
          id: item.item.id,
          titulo: item.item.titulo,
          genero: item.item.genero
        }
      })
    },
    
    onEliminar(item) {
      console.log(item)
        this.$bvModal.msgBoxConfirm('Se eliminará esta Canción', {
          title: '¿Esta seguro que desea eliminar?',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'Aceptar',
          cancelTitle: 'Cancelar',
          centered: true
        })
          .then(value => {
            if(value) {
              this.eliminarCanciones({
              titulo: item.item.titulo,
              onComplete: (response) => {
                  console.log(response)
                  this.$notify({
                      type: 'success',
                      title: response.data.mensaje
                  })
                  setTimeout(() => this.setCanciones(), 1000)
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
    this.setCanciones();
  }
}
</script>

<style>
.float-right{
  margin-right: 250px;
}
h1{
  margin-top: 20px;
  font-weight: bold;
}
</style>
