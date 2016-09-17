<script>
import availableSprites from './availableSprites'

export default {
  props: {
    pokemon: Object
  },
  computed: {
    sprites () {
      const sprites = this.pokemon.sprites || {}
      return availableSprites
        .reduce((acc, key) => {
          acc.push(sprites[key])
          return acc
        }, []).filter(x => (x !== undefined && x !== null))
    }
  }
}
</script>

<template>
  <div>
    <header class="page-header">
      <h2>{{ pokemon.name }}</h2>
    </header>

    <div class="row">
      <div v-for="sprite in sprites" class="col-xs-6 col-md-3">
        <span class="thumbnail">
          <img :src="sprite">
        </span>
      </div>
    </div>
  </div>
</template>
