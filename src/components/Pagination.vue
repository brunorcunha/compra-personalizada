<template>
  <div class="radio pagination">
    <template v-for="n in numberPages">
      <span :key="`p${n}`">
        <input type="radio" name="page" :id="n" v-model="itemSelecionado" :value="n" />
        <label :for="n"><span>{{ n }}</span></label>
      </span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    total: { type: Number, default: 0 },
    perPage: { type: Number, default: 0 },
    value: { type: Number, default: 0 }
  },
  data: () => ({
    itemSelecionado: 1
  }),
  computed: {
    numberPages () {
      return Math.ceil(this.total / this.perPage)
    }
  },
  watch: {
    itemSelecionado () {
      this.$emit('input', this.itemSelecionado)
    },
    value () {
      this.itemSelecionado = this.value
    }
  },
  mounted () {
    this.itemSelecionado = 1
  }
}
</script>

<style scoped>

</style>
