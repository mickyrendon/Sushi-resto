import { newNode } from './menuNode.js'

const body =  document.body
const menuMCtr =  document.querySelector('.mobile-m')
const navBar = document.querySelector('.nav-bar')

// btn menu function
export const mobileMenu = () => {   

    body.style.overflow = 'hidden'
    menuMCtr.classList.add('ov-hidden')
    navBar.classList.remove('sticky') 
    const newMenu = newNode()
    
    menuMCtr.append(newMenu)

    return newMenu
}
