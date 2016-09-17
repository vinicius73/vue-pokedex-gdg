const availables = [
  'back_female',
  'back_shiny_female',
  'back_default',
  'front_female',
  'front_shiny_female',
  'back_shiny',
  'front_default',
  'front_shiny'
]

const isValid = x => x !== undefined && x !== null

export default (sprites) => availables.reduce((acc, key) => {
  const url = sprites[key]
  if (isValid(url)) {
    acc.push({ url, key })
  }
  return acc
}, [])
