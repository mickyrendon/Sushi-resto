const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    spaceBetween: 30,
    effect: 'fade',
    // autoplay: {
    //     delay: 6000,
    //     pauseOnMouseEnter:true,
    //     disableOnInteraction: false
    
    // },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
    });