<template>
  <div class="container">
    <template v-if="cart.length === 0">
      <div>Adicione itens ao carrinho!</div>
    </template>
    <template v-for="(item, index) in cart">
      <div class="row" :key="`cart${item.breed}${item.subBreed}${index}`">
        <div class="col-sm cursor" @click="openProduct(item)"><Imagem :breed="item" :height="100" /></div>
        <div class="col-sm"><div class="row">{{ item.breed }} {{ item.subBreed }}</div></div>
        <div class="col-sm">
          <div class="row">-Cor: {{ item.cor }}</div>
          <div class="row">-Sexo: {{ item.sexo }}</div>
          <div class="row">-Idade: {{ item.idade }}</div>
        </div>
        <div class="col-sm" @click="remover(index)"><a class="cursor">[Remover]</a></div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Imagem from '@/components/Imagem'

export default {
  name: 'CartView',
  components: {Imagem},
  computed: {
    ...mapGetters(['cart'])
  },
  methods: {
    remover (index) {
      this.$store.dispatch('removeFromCart', index)
    }
  }
}
</script>

<style scoped>

</style>
