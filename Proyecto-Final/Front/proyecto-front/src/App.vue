<template>
  <div id="app">
    <div id="nav">
      <router-link to="/Inicio">Inicio | </router-link>
      <router-link to="/generos">   Generos | </router-link>
      <router-link to="/canciones">   Canciones</router-link>
        
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

#nav {
  padding: 30px;
  background-color: darkslateblue;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #f6f87e;
}
</style>
