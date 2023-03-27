import { numberListRender } from "./numberlistRender.js"
import { indexed } from "./numberListReduced.js"

// modal node & firstChild
const deliverModal = document.querySelector('.deliver-modal')
const fieldset =  document.createElement('fieldset')

deliverModal.addEventListener('click', async (ev) => {
    const title = ev.target.title
    if(title === 'modal' || title === 'cancel'){
        deliverModal.classList.remove('flex')
        deliverModal.classList.add('hidden')
        const { close } = await import('./cleanNode.js')
        return close()
    }
})


// let idx = 1
const numbersListNode = (idItem) => {

    const input  =  document.createElement('input')
          input.type = 'radio'
          input.name = 'items'
          input.value = `${indexed[idItem].sucursal}`
    const label =  document.createElement('label')
          label.classList.add('text-disactive-gray', 'flex', 'flex-row-reverse', 'justify-end', 'gap-2')
          label.innerHTML = `${indexed[idItem].sucursal}`

    label.append(input)
    
    return label
}

const addItem = (id) => {

    const newItem = numbersListNode(id)
   
    deliverModal.append(fieldset)
    fieldset.append(newItem)
    return deliverModal
}   

export const deliverList = (e) => {
    // showing deliver modal
    deliverModal.classList.remove('hidden')
    deliverModal.classList.add('flex')
    // setting fieldset styles
    fieldset.classList.add('py-6','px-4', 'w-auto', 'h-auto', 'flex', 'flex-col', 'gap-4', 'bkg-main-white','text-disactive-gray', 'rounded-md')
    const divLegend = document.createElement('div')
          divLegend.classList.add('mb-6')
    const legend =  document.createElement('legend')
          legend.classList.add('text-xl', 'txt-main-black')
          legend.innerHTML = 'Elige la sucursal más cercana'
    const div = document.createElement('div')
          div.classList.add('mt-12', 'flex', 'justify-end', 'gap-2')
    const callBtn = document.createElement('button')
    // btn innerHTML is setting en styles.css, because mediaquery
        //   callBtn.innerHTML = 'Llamar'
          callBtn.classList.add('call-btn', 'txt-m-white', 'btn', 'w-28', 'min-w-max')
    const cancelBtn = document.createElement('button')
          cancelBtn.setAttribute('title', 'cancel')
          cancelBtn.innerHTML = 'Cancelar'
          cancelBtn.classList.add('btn', 'w-28', 'min-w-max',  'opacity-70')
          
    fieldset.append(divLegend)
    divLegend.append(legend)
    numberListRender(addItem)
    fieldset.append(div)
    div.append(cancelBtn, callBtn)

}
