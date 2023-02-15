import { newList } from './nodeList.js'

// Creando dinamicamente el menu html
export const newNode = () => {
    // main ctr
    const div = document.createElement('div')
          div.classList.add('menu-m', 'modal', 'animate__animated', 'animate__fadeInLeft', 'supa-fast')
    // button ctr
    const button = document.createElement('button')
          button.classList = 'back'
          button.addEventListener('click', async () => {
          
            div.classList.remove('animate__fadeInLeft')
            div.classList.add('animate__fadeOutLeft')

            const { back } = await import('./backBtn.js')

            return setTimeout(() => {
                back()
            }, 300)
          })

    const figure = document.createElement('figure')
    const img = document.createElement('img')   
          img.src = 'assets/images/icon/back.png'
          img.setAttribute('alt', 'back')

    // list ctr
    const ul = document.createElement('ul')
          ul.classList = 'menu-list'
    
    // body.append(div)
    div.append(button, ul)
    
    button.append(figure)
    figure.append(img)

    //adding list items from nodelis.js applying spread operator
    ul.append(...newList)

    return div
}
