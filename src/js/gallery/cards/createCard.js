import { indexed } from '../cardsContentReduced.js'
import { cardRender } from '../renderIterator.js'
import { galleryPicsCreator } from '../modal/modal.js'

const nodeCard = document.querySelector('.gallery')
// variable incrementadora para agregar un id element cada elemento para cuando se necesite
let idx = 1
const createCard = (menuId) => {
    const cardCtr = document.createElement('div')
          cardCtr.setAttribute('title', 'menu-card')
          cardCtr.setAttribute('data-id', menuId)
          cardCtr.setAttribute('role', 'button')
          cardCtr.id = `card_${idx++}`
          cardCtr.classList = `${indexed[menuId].title} card bg-cover bg-center`
          cardCtr.style.backgroundImage = `url(${indexed[menuId].image.src})`
    const descCtr = document.createElement('div')     
      //  copiando el id de cardCtr para que así todos los elementos hijos de "descripción" e inclusive, tengan el mismo id y no halla problema en el script "modal"
      //     descCtr.id = cardCtr.id
          descCtr.classList = 'card-description'
          descCtr.setAttribute('title', 'card-description')
      //     descCtr.setAttribute('data-id', menuId)
    const h3 = document.createElement('h3')
          h3.classList = 'dish name'
          h3.setAttribute('title', 'dish-name')
          h3.innerText = `${indexed[menuId].title}`
    const p = document.createElement('p')
          p.classList = 'description'
          p.innerText = `${indexed[menuId].description}`
          p.classList.add('italic', 'hidden')
    const span = document.createElement('span')
          span.classList = 'price text-xs'
          span.setAttribute('title', 'price')
          span.innerText = `${indexed[menuId].price}`
          
          cardCtr.append(descCtr)
          descCtr.append(h3)
          descCtr.append(p)
          descCtr.append(span)

        return cardCtr
}

// crea la imagen y pasa como parametro el resultado da la funcion cardRender
const addImg = (id) => {
      const newCard = createCard(id)
      nodeCard.append(newCard)
      
      // console.log(nodeCard);
      return nodeCard
}   

export const cardsIterator =  cardRender(addImg)




// agrega el evento click al elemento padre de las cards, delegacion de eventos
nodeCard.addEventListener('click', async (ev) => {
      // console.log(ev.target);
      const cardName = ev.target.title
      ev.stopImmediatePropagation()

      if(cardName === 'menu-card' || cardName === 'card-description' || cardName === 'dish-name' || cardName === 'price'){
            // const { galleryPicsCreator } = await import('../modal/modal.js')
            // obtengo el elemento clickeado
            ev.preventDefault()
            return galleryPicsCreator(ev)
      }
      ev.preventDefault()
})