<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <Categorias />
      </div>
      <div class="col-8">
        <Produtos />
      </div>
    </div>
  </div>
</template>

<script>
import Categorias from '../components/Categorias'
import Produtos from '../components/Produtos'

export default {
  name: 'ListView',
  components: {
    Categorias,
    Produtos
  }
}
</script>
