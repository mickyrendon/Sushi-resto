import { menuDesktop } from './desktopMenu.js'

// muestra el menu desktop 
export const mediaQ = () => {
    const size = globalThis.matchMedia("(min-width:768px)")
    // mobile menu
    if(size.matches){
        menuDesktop()
    }    
}

