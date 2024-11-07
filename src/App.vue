<template>
  <div id="app">
    <router-view />
  </div> 
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* Paleta de cores */
:root {
  --primary-color: #FFA500; /* Roxo profundo */
  --secondary-color: #007bff; /* Azul */
  --neutral-bg: #e3e6e6; /* Cinza Azul claro */
  --text-color: #101c34;
}

/* Estilos globais */
body {
  background-color: #101c34;
  /* background-color: var(--primary-color); */
  color: var(--text-color);
}
body, html {
  margin: 0;
  padding: 0;
}
</style>
