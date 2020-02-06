<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './components/home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
html, body, #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>
