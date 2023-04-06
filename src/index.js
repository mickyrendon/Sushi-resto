import { deleteLoader } from '../src/js/loader/loader.js'
import { cardsIterator } from '../src/js/gallery/cards/createCard.js'
import { mediaQ } from '../src/js/menu/desktop/mediaqueries.js'
import { swiper } from '../src/js/slider/swiper.js'
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
    const { mobileMenu } = await import('../src/js/menu/mobile/mobileMenu.js')
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