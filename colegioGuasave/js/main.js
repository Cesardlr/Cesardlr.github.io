// HACER LO DE ANIME.JS
window.sr = ScrollReveal();
sr.reveal()
ScrollReveal().reveal('.header', {
    duration:2000,
    origin: 'bottom',
    distance:'-50px' 
});

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

