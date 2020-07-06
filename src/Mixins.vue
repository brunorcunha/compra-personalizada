<script>
import APIDogs from './api/dogs'

export default {
  methods: {
    async getBreeds () {
      return await APIDogs.breeds()
    },
    processBreeds (breeds) {
      const result = []
      Object.keys(breeds).forEach(breed => {
        const subBreeds = breeds[breed]
        if (subBreeds.length > 0) {
          for (let i in subBreeds) {
            const subBreed = subBreeds[i]
            result.push({breed, subBreed})
          }
        } else {
          result.push({breed, subBreed: ''})
        }
      })
      return result
    },
    openProduct (breed) {
      this.$router.push({
        name: 'Product',
        params: {
          breed: breed.breed,
          subBreed: breed.subBreed || null
        }
      })
    }
  }
}
</script>
