import { menuDesktop } from './desktopMenu.js'
// import { back } from './backBtn.js'

// muestra el menu desktop 
export const mediaQ = () => {
    const size = globalThis.matchMedia("(min-width:768px)")

    // mobile menu
    if(size.matches){
        // console.log('> que 768px')
        menuDesktop()
    }    
    // }else{
    //     console.log('< que 768px')
    //     back()
    // }
}

