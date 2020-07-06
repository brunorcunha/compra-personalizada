<template>
  <div id="app">
    <div id="header">
      <h1><img src="https://dog.ceo/img/dog-api-logo.svg" height="50" /> Loja de Doguinhos</h1>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/Carrinho">Carrinho ({{ cart.length }})</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['cart'])
  }
}
</script>

<style>
  @import 'App.css';
</style>
