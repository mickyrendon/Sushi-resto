import { previous, next} from './controllers.js'

// Event delegation
const modalPN = document.querySelector('.gallery-modal')
// obteniedo el width de la pantalla
const width = modalPN.offsetWidth
let x1, x2

// accediendo al array original para traer la imagen correspondiente
export const start = () => {
    modalPN.addEventListener('touchstart', (e) => {
        const tagTitle = e.target.title
        
        if(tagTitle === 'modal-pic'){
              
            let touchobj = e.changedTouches[0];
            x1 = parseInt(touchobj.clientX);
            e.preventDefault();
        }
  })
}

export const end = () => {
    
    
    modalPN.addEventListener('touchend', (e) => {
        const tagTitle = e.target.title
        const element = e.target
        // el id es la posicion del array
        const id = e.target.getAttribute('data-id')
        if(tagTitle === 'modal-pic'){

            let touchobj = e.changedTouches[0];
            x2 = parseInt(touchobj.clientX);

            let dif = x2 - x1;
            let prop = (width * dif) / 100;

            if (prop > 20) {

                const node = element
                
                setTimeout(() =>{
                    previous(id, node)
                }, 200)
                
                // quitando la animacion de transicion para volverla a poner y que funcione
                node.classList.remove('animate__animated', 'animate__fadeInLeft', 'animate__fadeInRight', 'supa-fast')

                
            } else if (prop < -20) {

                const node = element
                
                setTimeout(() =>{
                    next(id, node)
                },200)
                
                // quitando la animacion de transicion para volverla a poner y que funcione
                node.classList.remove('animate__animated', 'animate__fadeInRight', 'animate__fadeInLeft', 'supa-fast')
            }

            console.log(prop);
            e.preventDefault();
            
        }
  })
}

export const arrowBackEv = (e) => {
        // obteniendo la imagen actual
        const picture = document.querySelector('.node-pic')
        // id del btn arrow
        const tagTitle = e.target.id
        // el id es la posicion del array
        const id = picture.getAttribute('data-id')

        if(tagTitle === 'arrow-back'){

            previous(id, picture)
            e.preventDefault();
        }
}
export const arrowNextEv = (e) => {
     // obteniendo la imagen actual
     const picture = document.querySelector('.node-pic')
     // id del btn arrow
     const tagTitle = e.target.id
     // el id es la posicion del array
     const id = picture.getAttribute('data-id')

     if(tagTitle === 'arrow-next'){

        next(id, picture)
        e.preventDefault();
     }
}

