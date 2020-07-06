<template>
  <div class="radio cor">
    <template v-for="cor in cores">
      <span :key="`cor${cor}`">
        <input type="radio" name="color" :id="cor" v-model="corSelecionada" :value="cor" />
        <label :for="cor"><span></span></label>
      </span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'InputCor',
  props: {
    value: { type: String, default: null }
  },
  data: () => ({
    corSelecionada: null,
    cores: [
      'Vermelho',
      'Amarelo',
      'Azul',
      'Verde'
    ]
  }),
  watch: {
    corSelecionada () {
      this.$emit('input', this.corSelecionada)
    },
    value () {
      this.corSelecionada = this.value
    }
  },
  mounted () {
    this.corSelecionada = this.value
  }
}
</script>

<style scoped>

</style>
