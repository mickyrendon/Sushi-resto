//shared function used in menu btn back & menu items
export const back = () => {
    
    const nodeImg = document.querySelector('.mobile-m')
    const body =  document.querySelector('body')
    const navBar = document.querySelector('.nav-bar')


    if(nodeImg.childElementCount > 0){
        body.style.overflow = 'auto'
        navBar.classList.add('sticky') 
        const arr =  [...nodeImg.childNodes]
        
        arr.forEach(element => {
            return element.remove()
         })
    }
}
