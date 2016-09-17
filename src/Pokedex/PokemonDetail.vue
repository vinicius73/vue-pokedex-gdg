<script>
import availableSprites from './availableSprites'

export default {
  props: {
    pokemon: Object
  },
  computed: {
    sprites () {
      return availableSprites(this.pokemon.sprites || {})
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
        <div class="thumbnail">
          <img :src="sprite.url" :alt="sprite.key" :title="sprite.key">
          <div class="caption">
            {{ sprite.key }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
