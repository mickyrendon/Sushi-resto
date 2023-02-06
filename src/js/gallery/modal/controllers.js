import { indexed, keys } from '../cardsContentReduced.js'


export const next = (id, node) => {

    const nextId = Number(id) + 1

    const nextElem = indexed[Number(id)+1]//siguiente
    // array.length
    const listSize = keys.length
    
    if(nextId < listSize){

        const nextImgUrl = nextElem.image.src
        const nextTitle = nextElem.title
        const nextDesc = nextElem.description
        const nextPrice = nextElem.price

        // Node
        const tagNode = node

        tagNode.setAttribute('data-id', nextId)
        tagNode.id = `modal_card_${nextId+1}`
        tagNode.classList.add('animate__animated', 'animate__fadeInRight', 'supa-fast')

        tagNode.style.backgroundImage = `url("${nextImgUrl}")`
        const title = tagNode.childNodes[0].childNodes[0]
        const desc = tagNode.childNodes[0].childNodes[1]
        const price = tagNode.childNodes[0].childNodes[2]

        // agregando el contenido nuevo
        title.innerText = nextTitle
        desc.innerText = nextDesc
        price.innerText = nextPrice

    }
}


export const previous = (id, node) => {
    
    const prevId = id-1

    const prevElem = indexed[id-1]//anterior

    if(prevId !== -1){
    
        const prevImgUrl = prevElem.image.src
        const prevTitle = prevElem.title
        const prevDesc = prevElem.description
        const prevPrice = prevElem.price
    
        // Node, solo funciona una vez
        const tagNode = node
    
        tagNode.setAttribute('data-id', prevId)
        tagNode.id = `modal_card_${prevId+1}`
        tagNode.classList.add('animate__animated', 'animate__fadeInLeft', 'supa-fast')
    
        tagNode.style.backgroundImage = `url("${prevImgUrl}")`
        const title = tagNode.childNodes[0].childNodes[0]
        const desc = tagNode.childNodes[0].childNodes[1]
        const price = tagNode.childNodes[0].childNodes[2]
    
        // agregando el contenido nuevo
        title.innerText = prevTitle
        desc.innerText = prevDesc
        price.innerText = prevPrice

    }
}