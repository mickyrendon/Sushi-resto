let totalImages = 0;
let loadedImages = 0;
// api intesection observer
const isIntersecting = (entry) => {
    // true dentro de la pantalla
    return entry.isIntersecting
}
const loader = (entry) => {
    // img container
    const node = entry.target
    const img = node.firstChild
    // const url = img.dataset.src
    // load img
    // img.src = url
    img.onload = () => {
        loadedImages += 1
        logState()
      };
    // stop intersecting 
    observer.unobserve(node)
}
const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loader)
})

export const registerImg = (image) => {
    observer.observe(image)  
    console.log('registrando una imagen');
    totalImages += 1;
    logState()
}

export function logState(a) {
    console.log(`⚪️ Imágenes creadas lazy: ${totalImages}`) // TOFIX: //TO FIX
    console.log(`🟣 Imágenes cargadas: ${loadedImages}`);
    console.log("--------------------------------------");
}

