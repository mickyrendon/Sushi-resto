import { deleteLoader } from './js/loader/loader.js'
import { cardsIterator } from './js/gallery/cards/createCard.js'
import { mediaQ } from './js/menu/desktop/mediaqueries.js'
import { swiper } from './js/slider/swiper.js'
import { mobileMenu } from './js/menu/mobile/mobileMenu.js'
import { deliverList } from './js/deliverList/deliverListNode.js'
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



const deliverBtnNav = document.querySelector('.nav-bar')

deliverBtnNav.addEventListener('click', async (e) => {
    if(e.target.title === 'deliver-btn-nav'){
        console.log('navbarr')
        e.stopImmediatePropagation()
        return deliverList()
    }
                                            
})
deliverBtnNav.addEventListener("keydown", function(event) {
    if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    }
})

const deliverBtn = document.querySelector('#menu')
deliverBtn.addEventListener('click', async (e) => {
    if(e.target.title === 'deliver-btn'){
        return deliverList()
    }
    e.stopImmediatePropagation()

})

deliverBtn.addEventListener("keydown", function(event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
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