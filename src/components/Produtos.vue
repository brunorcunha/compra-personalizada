<template>
  <div class="row">
    <template v-for="breed in limitedBreeds">
      <div class="col-sm produto" :key="`product${breed.breed}${breed.subBreed}`" @click="openProduct(breed)">
        <Imagem :breed="breed" />
        <h3>{{ breed.breed }} {{ breed.subBreed }}</h3>
      </div>
    </template>
    <Pagination
      :total="filteredBreeds.length"
      :perPage="limit"
      v-model="page"
    />
  </div>
</template>

<script>
import EventBus from '../EventBus'
import Imagem from '../components/Imagem'
import Pagination from '@/components/Pagination'

export default {
  name: 'Produtos',
  components: {Pagination, Imagem },
  data: () => ({
    breeds: [],
    filteredBreeds: [],
    page: 1,
    limit: 9
  }),
  computed: {
    offset () {
      return (this.page - 1) * this.limit
    },
    limitedBreeds () {
      if (!this.filteredBreeds) return []
      return this.filteredBreeds.slice(this.offset, this.offset + this.limit)
    }
  },
  mounted () {
    this.initialize()
    EventBus.$on('filterBreed', this.filterBreed)
  },
  methods: {
    async initialize () {
      const breeds = await this.getBreeds()
      this.breeds = this.processBreeds(breeds)
      this.filteredBreeds = this.breeds
    },
    filterBreed ({ breed }) {
      this.page = 1
      if (!breed) {
        this.filteredBreeds = this.breeds
      } else {
        this.filteredBreeds = this.breeds.filter(b => b.breed === breed)
      }
    }
  }
}
</script>

