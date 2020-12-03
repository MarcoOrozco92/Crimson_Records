/*Enlanzando el boton de menu para cuando la pagina se vea en un celular*/
document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});

/*Efecto aparicion de los texto parte 2 pagina ScrollReveals*/
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 550 });
ScrollReveal().reveal('.cards-banner-one', { delay: 550 });
ScrollReveal().reveal('.cards-banner-two', { delay: 550 });