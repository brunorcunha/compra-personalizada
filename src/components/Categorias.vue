<template>
  <div>
    <label>
      Filtrar: <br/>
      <input v-model="search" type="text" />
    </label>

    <div class="scroll">
      <div class="list" @click="clearFilters">
        Todos ({{ Object.keys(breeds).length }})
      </div>

      <template v-for="breed in filteredBreeds">
        <div
          :key="`breed${breed}`"
          class="list"
          @click="filterBreed(breed)"
        >
          {{ breed }} <span v-if="breeds[breed].length > 1">({{ breeds[breed].length }})</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import EventBus from '../EventBus'

export default {
  name: 'Categorias',
  data: () => ({
    search: null,
    breeds: []
  }),
  computed: {
    filteredBreeds () {
      const breeds = Object.keys(this.breeds)
      if (!this.search) return breeds
      return breeds.filter(breed => breed.includes(this.search) ? breed : false)
    }
  },
  mounted () {
    this.initialize()
  },
  methods: {
    async initialize () {
      this.breeds = await this.getBreeds()
    },
    filterBreed (breed) {
      EventBus.$emit('filterBreed', { breed })
    },
    clearFilters () {
      this.search = ''
      EventBus.$emit('filterBreed', { breed: null })
    }
  }
}
</script>

