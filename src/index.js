import { deleteLoader } from '../src/js/loader/loader.js'
import { cardsIterator } from '../src/js/gallery/cards/createCard.js'
import { mediaQ } from '../src/js/menu/desktop/mediaqueries.js'
import { swiper } from '../src/js/slider/swiper.js'
import './css/vars.css'
import './css/styles.css'
import '../node_modules/animate.css/animate.min.css'

globalThis.onload = () => {
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

    // download menu
    const downloadMenu = document.querySelector('.download-menu')

    downloadMenu.addEventListener('click', async (ev) => {
        const { downloadPdf } = await import('../src/js/menuDownload/downloadBtn.js')
        return downloadPdf(ev)
    })

    return deleteLoader()
}

