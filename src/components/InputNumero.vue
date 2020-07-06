<template>
  <input type="number" v-model="internalValue" />
</template>

<script>
export default {
  name: 'InputNumero',
  props: {
    value: { type: Number, default: null }
  },
  data: () => ({
    internalValue: null
  }),
  watch: {
    internalValue () {
      const valor = this.internalValue < 0 ? 0 : parseInt(this.internalValue)
      this.internalValue = valor
      this.$emit('input', valor)
    },
    value () {
      this.internalValue = this.value
    }
  },
  mounted () {
    this.internalValue = this.value
  }
}
</script>

<style scoped>

</style>
