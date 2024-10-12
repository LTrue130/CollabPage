
//Fade out de los elementos principales de la página
setTimeout(() => {
    
    let mainText = document.getElementById('main-text');

    mainText.style.opacity = 1;   

}, 200);

setTimeout(() => {
    
    let mainImg = document.getElementById('main-image');

    mainImg.style.opacity = 1;   

}, 200);

//Animación de aparición para los siguientes elementos de la página
window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY + 200;

    let scrollArea = document.querySelector('.scroll-area');
    if (scrollPosition > window.innerHeight) {
        scrollArea.classList.add('visible');
    }
});
