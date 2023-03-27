//shared function used in menu btn back & menu items
export const close = () => {

    // const fieldset = document.querySelector('.deliver-modal')
    const fieldset = document.querySelector('fieldset')
    const body =  document.querySelector('body')

    if(fieldset.childElementCount > 0){
        body.style.overflow = 'auto'
        // navBar.classList.add('sticky') 
        const arr =  [...fieldset.childNodes]
        
        arr.forEach(element => {
            return element.remove()
         })
    }
}