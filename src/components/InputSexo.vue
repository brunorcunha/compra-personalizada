<template>
  <div class="radio sexo">
    <template v-for="sexo in sexos">
      <span :key="`sexo${sexo}`">
        <input type="radio" name="sexo" :id="sexo" v-model="sexoSelecionado" :value="sexo" />
        <label :for="sexo"><span>{{ sexo }}</span></label>
      </span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'InputSexo',
  props: {
    value: { type: String, default: null }
  },
  data: () => ({
    sexoSelecionado: null,
    sexos: [
      'Macho',
      'Fêmea'
    ]
  }),
  watch: {
    sexoSelecionado () {
      this.$emit('input', this.sexoSelecionado)
    },
    value () {
      this.sexoSelecionado = this.value
    }
  },
  mounted () {
    this.sexoSelecionado = this.value
  }
}
</script>

<style scoped>

</style>
