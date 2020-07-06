<template>
  <div class="alert" v-if="show">{{ msg }}</div>
</template>

<script>
export default {
  name: 'Alert',
  data: () => ({
    show: false,
    msg: ''
  }),
  methods: {
    showMsg (msg) {
      this.show = true
      this.msg = msg
      setTimeout(this.hideMsg, 6000)
    },
    hideMsg () {
      this.show = false
    }
  }
}
</script>

<style scoped>

</style>
