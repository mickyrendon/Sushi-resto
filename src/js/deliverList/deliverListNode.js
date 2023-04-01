import { numberListRender } from "./numberlistRender.js"
import { indexed } from "./numberListReduced.js"
import { checked, radioBtn } from "./radioBtn.js"

// modal node & firstChild
const deliverModal = document.querySelector('.deliver-modal')
const fieldset =  document.createElement('fieldset')

//modal click event to hidde itself
deliverModal.addEventListener('click', async (ev) => {
   
        const { close } = await import('./cleanNode.js')
        return close(ev)
    // }
})

// creation of label & sons
const numbersListNode = (idItem) => {
    console.log(`data id del item ${idItem}`)
    const divLabel =  document.createElement('div')
          divLabel.classList.add('flex', 'flex-col')
    const label =  document.createElement('label')
          label.classList.add('text-disactive-gray', 'flex', 'flex-row-reverse', 'justify-end', 'gap-2')
          label.innerHTML = `${indexed[idItem].sucursal}`
    const input  =  document.createElement('input')
          input.type = 'radio'
          input.name = 'items'
          input.value = `${indexed[idItem].sucursal}`
      //     input.classList.add('appearance-none','rounded-full', 'border-2', 'border-solid' )
          input.setAttribute(`data-id`, `${idItem}`)
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
    fieldset.classList.remove('hidden')
    const divLegend = document.createElement('div')
          divLegend.classList.add('mb-6')
    const legend =  document.createElement('legend')
          legend.classList.add('text-xl', 'txt-main-black')
          legend.innerHTML = 'Elige la sucursal más cercana'
    // const divLabel = document.createElement('div')

    const div = document.createElement('div')
          div.classList.add('mt-12', 'flex', 'justify-end', 'gap-2')
    const callBtn = document.createElement('a')
      // TODO, obtener el telefono del valor del radiobtn checkeado y ponerlo como href
          callBtn.setAttribute('name', 'call-btn')
          callBtn.innerHTML = 'Llamar'
          callBtn.classList.add('call-btn', 'txt-m-white', 'btn', 'w-28', 'min-w-max')
    const cancelBtn = document.createElement('button')
          cancelBtn.setAttribute('name', 'cancel')
          cancelBtn.innerHTML = 'Cancelar'
          cancelBtn.classList.add('btn', 'w-28', 'min-w-max',  'cancel')
          
    fieldset.append(divLegend)
    divLegend.append(legend)



    numberListRender(addItem)
    fieldset.append(div)
    div.append(cancelBtn, callBtn)

    const inputRadio = document.querySelectorAll('input[type="radio"]')
    const element = [...inputRadio]


    radioBtn()
    const check = checked()
    const item = check
    console.log(item)
    callBtn.setAttribute(`href`, `tel:${item}`)

    element.forEach(item => item.addEventListener('change', (e) =>{
      const id = e.target.dataset.id
      // console.log(id)
      const tel = indexed[id].telefono
      callBtn.setAttribute(`href`, `tel:${tel}`)

  }))

}

