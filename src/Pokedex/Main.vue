<script>
import { getType } from './services/types'
import { getPokemon } from './services/pokemon'
import { set } from 'vue'
import Types from './Types.vue'
import PokemonList from './PokemonList.vue'
import PokemonDetail from './PokemonDetail.vue'
import Loader from './Loader.vue'

export default {
  components: { Types, PokemonList, PokemonDetail, Loader },
  data () {
    return {
      type: {},
      pokemon: {},
      isLoading: false
    }
  },
  methods: {
    setLoad (value) {
      this.isLoading = value
    },
    onTypeSelect (type) {
      this.setLoad(true)
      getType(type.name)
        .then(result => {
          set(this, 'type', result)
          this.setLoad(false)
        })
    },
    onPokemonSelect (pokemon) {
      this.setLoad(true)
      getPokemon(pokemon.name)
        .then(result => {
          set(this, 'pokemon', result)
          this.setLoad(false)
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
  <loader v-if="isLoading"></loader>
  <div class="container">
    <div class="row">
      <header class="page-header">
        <div class="pull-right">
          <a href="https://github.com/vinicius73/">@Vinicius73</a>
        </div>
        <h3><a href="https://github.com/vinicius73/vue-pokedex-gdg">Pokédex GDG</a> <small v-show="isLoading">Loading...</small></h3>
      </header>

      <types @select="onTypeSelect" @load-start="setLoad(true)" @load-end="setLoad(false)" class="col-md-2"></types>
      <pokemon-list @select="onPokemonSelect" class="col-md-3" :list="pokemonList"></pokemon-list>
      <Pokemon-detail class="col-md-7" :pokemon="pokemon"></Pokemon-detail>
    </div>
  </div>
</template>
