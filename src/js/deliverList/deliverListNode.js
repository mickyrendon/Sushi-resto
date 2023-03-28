import { numberListRender } from "./numberlistRender.js"
import { indexed } from "./numberListReduced.js"
import { radioBtn } from "./radioBtn.js"

// modal node & firstChild
const deliverModal = document.querySelector('.deliver-modal')
const fieldset =  document.createElement('fieldset')

//modal click event to hidde itself
deliverModal.addEventListener('click', async (ev) => {
    const title = ev.target.title
    if(title === 'modal' || title === 'cancel'){
        deliverModal.classList.remove('flex')
        deliverModal.classList.add('hidden')
        const { close } = await import('./cleanNode.js')
        return close()
    }
})

// creation of label & sons
let idx = 1
const numbersListNode = (idItem) => {
    
    const divLabel =  document.createElement('div')
          divLabel.classList.add('flex', 'flex-col')
    const label =  document.createElement('label')
          label.classList.add('text-disactive-gray', 'flex', 'flex-row-reverse', 'justify-end', 'gap-2')
          label.innerHTML = `${indexed[idItem].sucursal}`
    const input  =  document.createElement('input')
          input.type = 'radio'
          input.name = 'items'
          input.value = `${indexed[idItem].sucursal}`
          input.setAttribute(`data-id`, `${idx++}`)
    const span  =  document.createElement('span')
          span.classList.add('pl-8','txt-disactive-gray', 'text-sm', 'place-self-stretch')
          span.innerHTML = `${indexed[idItem].telefono}`
        
    label.append(input)
    divLabel.append(label)
    divLabel.append(span)
    return divLabel
}
// getting lable & sons to put as childrens of fieldset
const addItem = (id) => {
    const newItem = numbersListNode(id)
    deliverModal.append(fieldset)
    fieldset.append(newItem)
    return deliverModal
}   

//click event function of deliver btn
export const deliverList = () => {
    // showing deliver modal
    deliverModal.classList.remove('hidden')
    deliverModal.classList.add('flex')
    // setting fieldset styles
    fieldset.classList.add('py-6','px-6', 'w-auto', 'h-auto', 'flex', 'flex-col', 'gap-4', 'bkg-main-white','text-disactive-gray', 'rounded-md')
    const divLegend = document.createElement('div')
          divLegend.classList.add('mb-6')
    const legend =  document.createElement('legend')
          legend.classList.add('text-xl', 'txt-main-black')
          legend.innerHTML = 'Elige la sucursal más cercana'
    // const divLabel = document.createElement('div')

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
    // setting 'addItem' as parameter of 'numberlistrender' to iterate it
    numberListRender(addItem)
    // fieldset.append(divLabel)
    fieldset.append(div)
    div.append(cancelBtn, callBtn)

    radioBtn()

    callBtn.addEventListener('click', async(e) => {
        e.preventDefault()
        const { checked } = await import('./radioBtn.js')
        return checked()
    })
}

