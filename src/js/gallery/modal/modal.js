import { start, end } from './parentModalEvent.js'
import { keys } from '../cardsContentReduced.js';

// sliders
const createModal = (element) => {
      
      const tag =  element.target.title

      if(tag === 'card-description' || tag === 'dish-name' || tag === 'price'){
           const arrayIndex = element.target.offsetParent.getAttribute('data-id')
            const swiper = document.createElement('div')
                  swiper.setAttribute('title', 'modal-pic')
                  swiper.setAttribute('data-id', arrayIndex)
                  swiper.id = `modal_${element.target.offsetParent.id}`
                  swiper.classList.add('node-pic', 'swiper-slide','modal-card')
                  swiper.style.backgroundImage = element.target.offsetParent.style.backgroundImage
            const descCtr = document.createElement('div')        
                  descCtr.classList.add('modal-description', 'h-1/6', 'pl-7', 'opacity-100', 'sm:pl-8')
            const h3 = document.createElement('h3')
                  h3.classList = 'dish name'
                  h3.innerText = element.target.offsetParent.childNodes[0].childNodes[0].innerText
            const p = document.createElement('p')
                  p.classList = 'description'
                  p.innerText = element.target.offsetParent.childNodes[0].childNodes[1].innerText
                  p.classList.add('italic')
            const span = document.createElement('span')
                  span.classList = 'price text-xs'
                  span.innerText = element.target.offsetParent.childNodes[0].childNodes[2].innerText
                  
                  
                  swiper.append(descCtr)
                  descCtr.append(h3)
                  descCtr.append(p)
                  descCtr.append(span)
                  
                  return swiper
    
      }else{

            const arrayIndex = element.target.getAttribute('data-id')
                  console.log(`${element.target.id} id del array: ${arrayIndex}`)
            const swiper = document.createElement('div')
                  swiper.setAttribute('title', 'modal-pic')
                  swiper.setAttribute('data-id', arrayIndex)
                  swiper.id = `modal_${element.target.id}`
                  swiper.classList.add('node-pic', 'swiper-slide','modal-card', 'bg-contain')
                  swiper.style.backgroundImage = element.target.style.backgroundImage
            const descCtr = document.createElement('div')        
                  descCtr.classList.add('modal-description', 'h-auto', 'p-5', 'opacity-100', 'sm:pl-8','flex', 'justify-column', 'gap-3')
            const h3 = document.createElement('h3')
                  h3.classList = 'dish name md:text-xl'
                  h3.innerText = element.target.childNodes[0].childNodes[0].innerText
            const p = document.createElement('p')
                  p.classList.add('description', 'md:max-w-lg')
                  p.innerText = element.target.childNodes[0].childNodes[1].innerText
                  p.classList.add('font-extralight', 'txt-gray')
            const span = document.createElement('span')
                  span.classList = 'price text-sm'
                  span.innerText = element.target.childNodes[0].childNodes[2].innerText
                  
                  
                  swiper.append(descCtr)
                  descCtr.append(h3)
                  descCtr.append(p)
                  descCtr.append(span)
                  
                  return swiper
      }
}

// agrega las imgs al nodo
export const parentNodes = (ev) => {
      const body = document.body
            body.style.overflow = 'hidden'

      const nodeModal = document.querySelector('.gallery-modal')
            nodeModal.classList.add('modal', 'top', 'ov-hidden')
            nodeModal.classList.remove('hidden')
            // atacando el style, porque el flex del modal no funciona en webpack
            nodeModal.style.display = 'flex'

      const swiperWraper = document.createElement('div')
            swiperWraper.classList.add('swiper-wrapper', 'animate__animated', 'animate__slideInDown', 'supa-fast')
      
      // back btn
      const button = document.createElement('button')
            button.classList.add('back', 'z-30', 'opacity-mid')

            button.addEventListener('click', async () => {

                  swiperWraper.classList.add('animate__slideOutUp')
                  const { back } = await import('./galleryModalBackBtn.js')

                  setTimeout(() => {
                        return back()     
                  }, 300)
            })

      const figure = document.createElement('figure')

      const img = document.createElement('img')   
            img.src = './assets/images/icon/back.png'
            img.classList.add('w-8', 'md:w-10')
            img.setAttribute('alt', 'back')

      // imgs
      const sliders = createModal(ev)

      // controladores / flechas
      const arrowNext =  document.createElement('div')
            arrowNext.classList.add('swiper-button-next', 'opacity-mid')
            arrowNext.id = 'arrow-next'
            arrowNext.setAttribute('tabindex', 0)
            arrowNext.setAttribute('role', 'button')
            arrowNext.setAttribute('arial-label', 'Next slide')
            arrowNext.setAttribute('arial-controls', 'swiper-wrapper-584efa4ad71c7bc1')
      const arrowBack =  document.createElement('div')
            arrowBack.classList.add('swiper-button-prev', 'opacity-mid')
            arrowBack.id = 'arrow-back'
            arrowBack.setAttribute('tabindex', 0)
            arrowBack.setAttribute('role', 'button')
            arrowBack.setAttribute('arial-label', 'Previous slide')
            arrowBack.setAttribute('arial-controls', 'swiper-wrapper-99a350a4f8de4633')

      // arrow click event
      arrowBack.addEventListener('click', async (e) => {

            const { arrowBackEv } = await import('./parentModalEvent.js')

            let dataId =  sliders.getAttribute('data-id')
            
            setTimeout(() => {

                  if(Number(--dataId) !== -1){
                        return arrowBackEv(e)
                  }

            },200)

            // quitando la animacion de transicion para volverla a poner y que funcione
            sliders.classList.remove('animate__animated', 'animate__fadeInLeft', 'animate__fadeInRight', 'supa-fast')
      })

      arrowNext.addEventListener('click', async (e) => {

            const { arrowNextEv } = await import('./parentModalEvent.js')
            
            let dataId =  sliders.getAttribute('data-id')
            
            setTimeout(() => {

                  if(Number(++dataId) < keys.length){
                        return arrowNextEv(e)
                  }

            },200)

            // quitando la animacion de transicion para volverla a poner y que funcione
            sliders.classList.remove('animate__animated', 'animate__fadeInRight', 'animate__fadeInLeft', 'supa-fast')
      })


      
      swiperWraper.append(button, sliders, arrowBack, arrowNext)
      nodeModal.append(swiperWraper)
      button.append(figure)
      figure.append(img)
      // nodeModal.ape

      return nodeModal
}

// iterando los imagenes del array
export const galleryPicsCreator = (e) => parentNodes(e)

//Llamando a los eventos touch del modal, para poder cambiar de imagenes
start()
end()