<template>
  <div class="container" v-if="breed">
    <Alert ref="alert" />
    <div class="row">
      <div class="col-sm">
        <Imagem :breed="breed" :height="500" />
      </div>
      <div class="col-sm">
        <h1>{{ breed.breed }} {{ breed.subBreed }}</h1>
        <h2 class="preco">R$ 500,00</h2>
        <h2>Cor:</h2>
        <InputCor v-model="filter.cor" />
        <div v-if="subTotalCor > 0">+ R${{ subTotalCor }}</div>
        <h2>Sexo:</h2>
        <InputSexo v-model="filter.sexo" />
        <div v-if="subTotalSexo > 0">+ R${{ subTotalSexo }}</div>
        <h2>Idade:</h2>
        <InputNumero v-model="filter.idade" />
        <div v-if="subTotalIdade > 0">+ R${{ subTotalIdade }}</div>
        <h2>Sub-Total: R${{ subTotal }}</h2>
        <div>
          <button :disabled="disabled" @click="encomendar">
            Encomendar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Imagem from '../components/Imagem'
import InputCor from '../components/InputCor'
import InputSexo from '../components/InputSexo'
import InputNumero from '../components/InputNumero'
import Alert from '@/components/Alert'

export default {
  name: 'ProductView',
  components: {
    Alert,
    Imagem,
    InputCor,
    InputSexo,
    InputNumero
  },
  data: () => ({
    filter: {
      cor: null,
      sexo: null,
      idade: null
    },
    breed: null,
    valorBase: 500
  }),
  computed: {
    ...mapGetters(['filters']),
    subTotalIdade () {
      if (!this.filter.idade) return 0
      return this.filter.idade < 10 ? (10 - this.filter.idade) * 10 : 0
    },
    subTotalSexo () {
      return this.filter.sexo !== 'Fêmea' ? 0 : 100
    },
    subTotalCor () {
      return (!this.filter.cor) ? 0 : this.filter.cor.length * 10
    },
    subTotal () {
      return this.valorBase + this.subTotalCor + this.subTotalSexo + this.subTotalIdade
    },
    disabled () {
      return (!this.filter.cor || !this.filter.sexo || !this.filter.idade)
    },
    data () {
      return {
        ...this.breed,
        cor: this.filter.cor,
        sexo: this.filter.sexo,
        idade: this.filter.idade
      }
    }
  },
  watch: {
    filter: {
      handler: function () {
        this.saveFilter()
      },
      deep: true
    }
  },
  mounted () {
    this.breed = {
      breed: this.$route.params.breed,
      subBreed: this.$route.params.subBreed || ''
    }
    this.initialize()
  },
  methods: {
    async initialize () {
      const filter = this.filters[`${this.breed.breed}${this.breed.subBreed}`]
      if (filter) {
        this.filter.cor = filter.cor
        this.filter.sexo = filter.sexo
        this.filter.idade = filter.idade
      }
    },
    saveFilter () {
      if (!this.filter.cor && !this.filter.sexo && !this.filter.idade) return
      this.$store.dispatch('setFilter', this.data)
    },
    encomendar () {
      this.$store.dispatch('add2Cart', this.data)
      this.$store.dispatch('removeFilter', this.breed)
      this.clearFilters()
      this.$refs.alert.showMsg('Produto enviado com sucesso para o carrinho!')
    },
    clearFilters () {
      this.filter = {
        cor: null,
        sexo: null,
        idade: null
      }
    }
  }
}
</script>
