window.sr = ScrollReveal();
sr.reveal()

ScrollReveal().reveal('.header', {
    duration:2000,
    origin: 'bottom',
    distance:'-50px' 
});

// INDEX SCROLL REVEAL
ScrollReveal().reveal('.videoContainer', {
    duration:2000,
    origin: 'right',
    distance:'-70px',
    opacity: 0
});

// INSTITUCION SCROLL REVEAL
ScrollReveal().reveal('.info__card-container', {
    duration:2000,
    origin: 'left',
    distance: '70px'    
});

ScrollReveal().reveal('.info__card-container--right', {
    duration:2000,
    origin: 'right',
    distance: '70px'    
});
ScrollReveal().reveal('.info__card-container--personal', {
    duration:2000,
    origin: 'top',
    distance: '70px'    
});


// EDUCACION SCROLL REVEAL






// CARROUSEL
window.addEventListener('load',function(){
    new Glider(document.querySelector('.carrousel__list'),{
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '.carrousel__indicators',
    arrows: {
    prev: '.carrousel__before',
    next: '.carrousel__next'
},
    });
});


