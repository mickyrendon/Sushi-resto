// import { addImg } from '../src/js/gallery/createCard.js'
import { cardsIterator } from '../src/js/gallery/createCard.js'
import { mediaQ } from '../src/js/menu/mediaqueries.js'
// import 'animate.css'

window.onload = () => cardsIterator
// desktop menu
mediaQ()
// menu mobile
const mobileMenuBtn = document.querySelector('.menu-mobile')

mobileMenuBtn.addEventListener('click', async () => {
    const { mobileMenu } = await import('../src/js/menu/mobileMenu.js')
    return mobileMenu()
})

// download menu
const downloadMenu = document.querySelector('.download-menu')

downloadMenu.addEventListener('click', async (ev) => {
    const { downloadPdf } = await import('../src/js/menuDownload/downloadBtn.js')
    return downloadPdf(ev)
})




