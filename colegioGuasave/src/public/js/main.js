window.sr = ScrollReveal();
sr.reveal()

// INDEX SCROLL REVEAL
ScrollReveal().reveal('.indexContainer', {
    duration:2000,
    origin: 'right',
    distance:'-70px',
    opacity: 0
});



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
    new Glider(document.querySelector('#carrousel__list2'),{
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '#carrousel__indicators2',
    arrows: {
    prev: '#carrousel__before2',
    next: '#carrousel__next2'
},
    });
    new Glider(document.querySelector('#carrousel__list3'),{
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '#carrousel__indicators3',
    arrows: {
    prev: '#carrousel__before3',
    next: '#carrousel__next3'
},
    });
    new Glider(document.querySelector('#carrousel__list4'),{
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '#carrousel__indicators4',
    arrows: {
    prev: '#carrousel__before4',
    next: '#carrousel__next4'
},
    });
});


