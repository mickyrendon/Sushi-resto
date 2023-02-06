export const back = () => {
    const nodeImg = document.querySelector('.gallery-modal')
    const body =  document.body


    if(nodeImg.childElementCount > 0){
        body.style.overflow = 'auto'
        nodeImg.classList.add('hidden')

        const arr =  [...nodeImg.childNodes]

        arr.forEach(element => {
           return element.remove()
        });
    }
}