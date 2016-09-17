<script>
export default {
  data () {
    return {
      current: ''
    }
  },
  props: {
    list: Array
  },
  methods: {
    select (pokemon) {
      this.$emit('select', pokemon)
      this.current = pokemon.name
    }
  }
}
</script>

<template>
  <ul class="list-group">
    <li class="list-group-item"
        :class="{active: current === pokemon.name}"
        v-for="pokemon in list"
        @click="select(pokemon)" >
      {{ pokemon.name }}
    </li>
  </ul>
</template>

<style scoped>
  .list-group-item {
    cursor: pointer;
  }
</style>
