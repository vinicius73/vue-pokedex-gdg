import axios from 'axios'

export default axios.create({
  baseURL: 'http://pokeapi.co/api/v2/'
})
