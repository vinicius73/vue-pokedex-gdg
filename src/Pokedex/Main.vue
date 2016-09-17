<script>
import { getType } from './services/types'
import { getPokemon } from './services/pokemon'
import { set } from 'vue'
import Types from './Types.vue'
import PokemonList from './PokemonList.vue'
import PokemonDetail from './PokemonDetail.vue'

export default {
  components: { Types, PokemonList, PokemonDetail },
  data () {
    return {
      type: {},
      pokemon: {},
      isLoading: false
    }
  },
  methods: {
    onTypeSelect (type) {
      this.isLoading = true
      getType(type.name)
        .then(result => {
          set(this, 'type', result)
          this.isLoading = false
        })
    },
    onPokemonSelect (pokemon) {
      this.isLoading = true
      getPokemon(pokemon.name)
        .then(result => {
          set(this, 'pokemon', result)
          this.isLoading = false
        })
    }
  },
  computed: {
    pokemonList () {
      return (this.type.pokemon || []).map(x => x.pokemon)
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <header class="page-header">
        <h3>Pokedex GDG <small v-show="isLoading">Loading...</small></h3>
      </header>

      <types @select="onTypeSelect" class="col-md-2"></types>
      <pokemon-list @select="onPokemonSelect" class="col-md-3" :list="pokemonList"></pokemon-list>
      <Pokemon-detail class="col-md-7" :pokemon="pokemon"></Pokemon-detail>
    </div>
  </div>
</template>
