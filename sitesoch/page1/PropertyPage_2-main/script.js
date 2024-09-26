// // navbar
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


ScrollReveal().reveal(".contact__image img", {
    ...scrollRevealOption,
    origin: "left",
});

const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
});