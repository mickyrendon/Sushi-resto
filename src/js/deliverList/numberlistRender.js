import { keys } from './numberListReduced.js'

// itera el parametro de acuerdo a la longitud del array keys, retorna un numero
export function numberListRender(element) {
      for(let i of keys){
        element(i)
      }
} 