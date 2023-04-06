import { deleteLoader } from './js/loader/loader.js'
import { cardsIterator } from './js/gallery/cards/createCard.js'
import { mediaQ } from './js/menu/desktop/mediaqueries.js'
import { swiper } from './js/slider/swiper.js'
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

mobileMenuBtn.addEventListener('click', async () => {
    const { mobileMenu } = await import('./js/menu/mobile/mobileMenu.js')
    return mobileMenu()
})



const deliverBtn = document.querySelector('body')
deliverBtn.addEventListener('click', async (e) => {
    const { deliverList } = await import('./js/deliverList/deliverListNode.js')
    // e.preventDefault()
    if(e.target.title === 'deliver-btn'){
        console.log('deliver btn main');
        return deliverList()
    }else if(e.target.title === 'deliver-btn-nav'){
        console.log('deliver btn nav');
        return deliverList()
    }
    
})


globalThis.addEventListener('load', () => {
    return deleteLoader() 
})