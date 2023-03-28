import { indexed } from './numberListReduced.js'

export const radioBtn = () => {
    const inputRadio = document.querySelectorAll('input[type="radio"]')
    // to get all radiobtns
    const radioArray = [...inputRadio]
    // setting checked attribute to first radiobtn
    const item =  radioArray.at(4)
          item.setAttribute('checked', 'true')
    
    return item
}
  
// recorrer la lista y obtener el elemento checkeado, el evento se debe escuchar siempre que el form este abierto
export const checked = () => {
    const inputRadio = document.querySelectorAll('input[type="radio"]')
    const element = [...inputRadio]
    element.forEach(item => { 

        if(item.checked === true){
            const id = item.dataset.id
            const tel = indexed[id-1].telefono
            console.log(tel)
            return tel
        }
    })
}


// TODO
/* 
    // 1. seleccionar por default el primer checkbox
    // 2. evento btn call matchear el id del checkbox seleccionado con el id de la lista de objetos
    3. validar el mediaquerie del dispositivo y el numero de telefono invalido
    4. si es mobile tomar el numero del item y mostrarlo en la ventana de nueva llamada del dispositivo
    5. si es desktop abrir un modal con el nombre de la sucursal y el numero de telefono
 */

// // others radioBtn
// export const othersCh = () => {
//     const element = [...radioBtn]
//     const lastEl = element.at(-1)
    
//     if(lastEl.checked === true){
//         return lastEl.checked = false
//     }
// }

// // checkbox word event
// export const checkboxWords = (e) => {
//     if(e.target.checked === true){
//         const checksStatus = filterArray().forEach((el) => { el.checked = false})

//         return checksStatus
//     }else {
//         return e.target.checked = false
//     }
// }
