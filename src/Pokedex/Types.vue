<script>
import { getList } from './services/types'
import { set } from 'vue'

export default {
  data () {
    return {
      list: [],
      current: ''
    }
  },
  ready () {
    this.loadTypes()
  },
  methods: {
    select (type) {
      this.$emit('select', type)
      this.current = type.name
    },
    loadTypes () {
      this.$emit('load-start')
      getList()
        .then(response => {
          set(this, 'list', response.results)
          this.$emit('load-end')
        })
    }
  }
}
</script>

<template>
  <ul class="list-group">
    <li class="list-group-item"
        :class="{active: type.name === current}"
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
