<script>
export default {
  props: {
    list: Array
  },
  methods: {
    select (pokemon) {
      this.$emit('select', pokemon)
    }
  }
}
</script>

<template>
  <ul class="list-group">
    <li class="list-group-item"
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
