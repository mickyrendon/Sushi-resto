import { deleteLoader } from './js/loader/loader.js'
import { cardsIterator } from './js/gallery/cards/createCard.js'
import { mediaQ } from './js/menu/desktop/mediaqueries.js'
import { swiper } from './js/slider/swiper.js'
import { mobileMenu } from './js/menu/mobile/mobileMenu.js'
// import "../src/css/vars.css"
// import '../src/css/styles.css'
// import '../node_modules/animate.css/animate.min.css'
// import '../node_modules/animate.css'
// Copy and paste me to your console
swiper
cardsIterator
// desktop menu
mediaQ()
// menu mobile
const mobileMenuBtn = document.querySelector('.menu-mobile')
      mobileMenuBtn.addEventListener('click', mobileMenu, true)



const deliverBtn = document.querySelector('body')
// FIXME, con doble click se duplica la imagen
deliverBtn.addEventListener('onclick', async (e) => {
    e.preventDefault()
    e.stopImmediatePropagation()
    if(e.target.title === 'deliver-btn'){
        const { deliverList } = await import('./js/deliverList/deliverListNode.js')
        return deliverList()
    }else if(e.target.title === 'deliver-btn-nav'){
        const { deliverList } = await import('./js/deliverList/deliverListNode.js')
        return deliverList()
    }

})


globalThis.addEventListener('load', () => {
    return deleteLoader() 
})


// 
/* mobileMenuBtn.addEventListener('click', async () => {
    const { mobileMenu } = await import('./js/menu/mobile/mobileMenu.js')
    return mobileMenu()
}) 
*/