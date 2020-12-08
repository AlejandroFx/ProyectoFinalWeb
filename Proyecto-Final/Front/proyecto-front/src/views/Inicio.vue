<template>
   <div>
       <h1 class="tituloInicio">Inicio de Configuración Músical</h1>
       <hr>
       <h2>Seleccione el tipo de de genero de canción para su filtrado</h2>
       <hr>
      
        <ul class="list-group">
           <li class="list-group-item">
             <div class="opcion">
              <select  class="form-control" v-model="genero">
             <option  v-for="generos in allGeneros" :key="generos.id">
                 {{generos.genero}}
             </option>
            </select>
             </div>
            </li>
           
           <li  v-for="item in filtrar" :key="item.id" class="list-group-item"><span class="tituloCanciones">{{item.titulo}}</span></li>
       </ul>
     
       
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    props: {
        genero: '',
    },
   
    computed: {
    ...mapGetters(['allCanciones', 'allGeneros', 'filtrados']),
    filtrar(){
    return this.allCanciones.filter((item)=> item.genero.includes(this.genero))
    }
  },
  methods: {
...mapActions(['setCanciones', 'setGeneros']),
    filtrar(genero){

    }
   
  },
  mounted() {
    this.setCanciones(),
    this.setGeneros();
  }
    
}
</script>

<style>
.tituloInicio{
  margin-top: 20px;
  color: darkslateblue;
  font-weight: bold;
}
h2{
    color: darkslateblue;
}
.opcion{
  width: 50%;
  margin-left: 340px;
}
.tituloCanciones{
  color: darkslateblue;
}
body{
  
}


</style>