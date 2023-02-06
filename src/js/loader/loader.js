export const deleteLoader = () => {
    const body = document.body
    const loaderCtr = document.querySelector('.loader-ctr')
    
    if(loaderCtr.childElementCount > 0){
        body.classList.remove('ov-hidden')
        body.classList.add('overflow-auto')

        loaderCtr.classList.add('animate__fadeOut')
        
        

        setTimeout(() => {
            loaderCtr.classList.remove('w-screen', 'h-screen', 'fixed', 'top-0', 'z-30', 'grid', 'place-items-center', 'bkg-main-black', 'ov-hidden', 'animate__fadeIn')
            loaderCtr.classList.add('hidden')
        }, 300)


        const arr =  [...loaderCtr.childNodes]
        
        arr.forEach(element => {
            return element.remove()
        })
    }
}