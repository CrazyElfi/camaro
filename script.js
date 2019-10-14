// (function burgerMenu() {
//     var burger = {
//         navToggle: document.querySelector('.burger-menu__btn'),
//         nav: document.querySelector('nav'),
//
//         doToggle: function(e) {
//             e.preventDefault();
//             this.navToggle.classList.toggle('expanded');
//             this.nav.classList.toggle('expanded');
//         }
//     };
//
//
//     burger.navToggle.addEventListener('click', function(e) { burger.doToggle(e); });
//     burger.nav.addEventListener('click', function(e) { burger.doToggle(e); });
//
// }());

// $(function(){
//
//     $('.burger-menu').on('click', function() {
//         $('.burger-menu__nav').slideToggle(300, function(){
//             if( $(this).css('display') === "none"){
//                 $(this).removeAttr('style');
//             }
//         });
//
//     });
//
// });



// $(".burger-menu").on('click',function(){
//     $(this).find(".burger-menu__btn").toggleClass("burger-menu__active");
//     $(this).find(".burger-menu__nav").toggleClass("burger-menu__active");
//     $(this).find(".burger-menu__overlay").toggleClass("burger-menu__active");
//     $("body").toggleClass("body_hidden");
// });
//
// $('.burger-menu__btn').on('click', (e) => {
//     e.preventDefault();
// });


// вариант с урока
function burgerMenu(selector) {

    let menu = $(selector);
    console.log(menu);
    let button = menu.find('.burger-menu__btn');
    console.log(button);
    let links = menu.find('.burger-menu__link');
    let overlay = menu.find('.burger-menu__overlay');

    button.on('click', (e) => {
        console.log('click');
        e.preventDefault();
        toggleMenu();
    })

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu__active');

        if (menu.hasClass('.burger-menu__active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    }
}

burgerMenu('.burger-menu');
console.log('script loaded')
