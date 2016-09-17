import http from './httpClient'

export const getList = () => http.get('/pokemon').then(response => response.data)
export const getPokemon = id => http.get(`/pokemon/${id}`).then(response => response.data)
