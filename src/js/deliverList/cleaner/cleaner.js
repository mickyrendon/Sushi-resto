export const callbackCleaner = (item) => {
    console.log(`${item} eliminado`)
    if(item.childElementCount > 0){
        // navBar.classList.add('sticky') 
        const arr =  [...item.childNodes]
        
        arr.forEach(element => {
            console.log('fieldset borrado');
            element.remove()
         })
    }
    return item.remove()
}

export const modal = () =>{
    const deliverModal = document.querySelector('.deliver-modal')
          deliverModal.classList.remove('flex')
          deliverModal.classList.add('hidden')
}