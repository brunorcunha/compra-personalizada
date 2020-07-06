<template>
  <img :src="url" class="img" :style="`max-width: ${height}px; max-height: ${height}px;`" />
</template>

<script>
import APIDogs from '../api/dogs'

export default {
  name: 'Imagem',
  props: {
    breed: { type: Object, default: () => null },
    height: { type: Number, default: 200 }
  },
  data: () => ({
    url: ''
  }),
  watch: {
    breed () {
      this.getUrl()
    }
  },
  mounted () {
    this.getUrl()
  },
  methods: {
    async getUrl () {
      if (!this.breed) return
      if (this.breed.subBreed) {
        this.url = await APIDogs.imgSubBreed(this.breed.breed, this.breed.subBreed)
      } else {
        this.url = await APIDogs.imgBreed(this.breed.breed)
      }
    }
  }
}
</script>

