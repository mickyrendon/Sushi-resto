// import { registerImg } from "./lazyLoader.js"
import { menu } from './cardsContent.js'


// lista los elementos del array con el 'title' de cada uno
export const indexed = menu.reduce((acum, elem, index)  => ({
      ...acum,
      // [elem.title]: elem,
      [index]: elem
}), {})

// obtiene las keys del arreglo indexed
export const keys = Object.keys(indexed)
