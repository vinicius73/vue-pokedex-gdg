<script>
import { getList } from './services/types'
import { set } from 'vue'

export default {
  data () {
    return {
      list: []
    }
  },
  ready () {
    getList()
      .then(response => {
        set(this, 'list', response.results)
      })
  },
  methods: {
    select (type) {
      this.$emit('select', type)
    }
  }
}
</script>

<template>
  <ul class="list-group">
    <li class="list-group-item"
        v-for="type in list"
        @click="select(type)" >
      {{ type.name }}
    </li>
  </ul>
</template>

<style scoped>
  .list-group-item {
    cursor: pointer;
  }
</style>
