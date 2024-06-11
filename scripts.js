$(document).ready(function() {
    // Animación para el logo en la sección hero
    $('.hero .logo-center img').hide().fadeIn(2000);

    // Animación para los logos en otras secciones
    $('.about .logo-center img, .contact .logo-center img, footer .logo-center img').hide().slideDown(2000);

    // Animación al hacer hover en los productos
    $('.product').hover(
        function() {
            $(this).animate({ 
                marginTop: "-10px",
                boxShadow: "0 5px 15px rgba(255, 255, 255, 0.5)"
            }, 300);
        },
        function() {
            $(this).animate({ 
                marginTop: "0px",
                boxShadow: "none"
            }, 300);
        }
    );

    // Animación para el formulario de contacto
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        $(this).slideUp(1000).slideDown(1000);
    });
});
