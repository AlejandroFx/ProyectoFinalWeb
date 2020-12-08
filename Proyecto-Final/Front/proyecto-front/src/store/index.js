import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    generos: [],
    canciones: []
  },
  mutations: {
    SET_GENEROS(state, generos){
      state.generos = generos
    },
    SET_CANCIONES(state, canciones){
      state.canciones = canciones
    }
  },
  actions: {
    setGeneros({commit}){
      axios.get('http://localhost:3001/Generos')
      .then(response => {
        console.log(response);
        commit('SET_GENEROS', response.data);
      })
    },
    setCanciones({commit}){
      axios.get('http://localhost:3001/Canciones')
      .then(response => {
        console.log(response);
        commit('SET_CANCIONES', response.data);
      })
    },
    crearGeneros({commit}, {params, onComplete, onError}){
      axios.post('http://localhost:3001/Generos', params)
      .then(onComplete)
      .catch(onError)
    },
    crearCanciones({commit}, {params, onComplete, onError}){
      axios.post('http://localhost:3001/Canciones', params)
      .then(onComplete)
      .catch(onError)
    },
    obtenerGeneros({commit}, {genero, onComplete}){
      axios.get(`http://localhost:3001/Generos/${genero}`)
      .then(onComplete)
      .catch(error => {
        console.log(error.response)
      })
    },
    obtenerCanciones({commit}, {titulo, onComplete}){
      axios.get(`http://localhost:3001/Canciones/${titulo}`)
      .then(onComplete)
      .catch(error => {
        console.log(error.response)
      })
    },
    editarCanciones({commit}, {titulo, params, onComplete, onError }){
      axios.put(`http://localhost:3001/Canciones/${titulo}`, params)
      .then(onComplete)
      .catch(onError)
    },
    eliminarGenero({commit},  {genero, onComplete, onError } ){
      axios.delete(`http://localhost:3001/Generos/${genero}`)
      .then(onComplete)
      .catch(onError)
    },
    eliminarCanciones({commit},  {titulo, onComplete, onError } ){
      axios.delete(`http://localhost:3001/Canciones/${titulo}`)
      .then(onComplete)
      .catch(onError)
    }
  },
  getters: {
    allGeneros: state => {
      return state.generos
    },
    allCanciones: state => {
      return state.canciones
    }
}
})
