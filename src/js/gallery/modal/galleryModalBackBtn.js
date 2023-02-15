export const back = () => {
    const nodeImg = document.querySelector('.gallery-modal')
    const body =  document.body


    if(nodeImg.childElementCount > 0){
        body.style.overflow = 'auto'
        // FIXME, no funciona con webpack, 
        nodeImg.classList.add('hidden')
        // atacando directamente el estilo
        nodeImg.style.display = 'none'


        const arr =  [...nodeImg.childNodes]

        arr.forEach(element => {
           return element.remove()
        });
    }
}