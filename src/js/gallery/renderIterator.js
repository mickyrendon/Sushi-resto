import { keys } from './cardsContentReduced.js'

// itera el parametro de acuerdo a la longitud del array keys, retorna un numero
export function cardRender(element) {
    // for(let i = 0; i < keys.length; i++){
    for(let i of keys){
          element(i)
        }
    } 