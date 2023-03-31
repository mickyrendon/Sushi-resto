import { callbackCleaner, modal } from "./cleaner/cleaner.js"

const fieldset =  document.querySelector('fieldset')

//shared function used in menu btn back & menu items
export const close = (ev) => {
    const targetC = copiedNode
    const targetM = modal
    const cleaner = callbackCleaner
    
    const title = ev.target.title
    const name = ev.target.name
    const parentNTitle = ev.target.parentNode.title

    if(title === 'modal' || name === 'cancel'){

        if(name === 'cancel' && parentNTitle === 'alert-div' || title === 'modal' && ev.target.lastElementChild.title === 'alert-div' ){ 
            console.log('lastelement chi')
            const alert =  document.querySelector('.alert-msg')
            return cleaner(alert), targetM()
        }

        return cleaner(fieldset), targetM()}
    // }else if(name === 'call-btn'){
    //     return targetC(), cleaner(fieldset)
    // }
}

function copiedNode () {
    const modal = document.querySelector('.deliver-modal')
    const fieldset =  document.querySelector('fieldset')
          fieldset.classList.add('hidden')

    const div =  document.createElement('div')
          div.classList.add('alert-msg','py-6','px-6', 'w-auto', 'h-auto', 'flex', 'flex-col', 'items-center', 'gap-4', 'bkg-main-white','text-disactive-gray', 'rounded-md')
          div.setAttribute('title', 'alert-div')
    const p =  document.createElement('p')
          p.classList.add('m-8','text-xl', 'txt-main-black')
          p.innerHTML = '¡Numero copiado!'
    const btn =  document.createElement('button')
          btn.classList.add('txt-m-white', 'btn', 'w-28', 'min-w-max')
          btn.setAttribute('name', 'cancel')
          btn.innerHTML = 'Cerrar'

    div.append(p)
    div.append(btn)
    modal.append(div)
          
}
