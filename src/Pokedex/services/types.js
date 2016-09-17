import http from './httpClient'

export const getList = () => http.get('/type').then(response => response.data)
export const getType = id => http.get(`/type/${id}`).then(response => response.data)
