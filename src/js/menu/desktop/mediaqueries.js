import { menuDesktop } from './desktopMenu.js'

// muestra el menu desktop 
export const mediaQ = () => {
    const size = globalThis.matchMedia("(min-width:768px)")
    // mobile menu
    if(size.matches){
        // const btn =  document.querySelector('.call-btn')
        // btn.innerHTML = 'Ver numero'
        return menuDesktop()
    }    
}

