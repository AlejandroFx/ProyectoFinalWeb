import Vue from 'vue'
import VueRouter from 'vue-router'
import Genero from '../views/Genero'
import AgregarGenero from '../views/AgregarGenero'
import AgregarCancion from '../views/AgregarCancion'
import Canciones from '../views/Canción'
import EditarC from '../views/EditarCanciones'
import Inicio from '../views/Inicio'
Vue.use(VueRouter)

const routes = [
  {
    path: '/generos',
    name: 'Genero',
    component: Genero
  },
  {
    path: '/agregar-genero',
    name: 'Agregar',
    component: AgregarGenero
  },
  {
    path: '/agregar-cancion',
    name: 'AgregarC',
    component: AgregarCancion
  },
  {
    path: '/canciones',
    name: 'Canciones',
    component: Canciones
  },
  {
    path: '/editar-canciones',
    name: 'EditarCanciones',
    component: EditarC
  },
  {
    path: '/Inicio',
    name: 'Inicio',
    component: Inicio
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
