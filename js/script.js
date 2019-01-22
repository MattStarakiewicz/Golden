$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('nav').addClass('transparent');
    } else {
      $('nav').removeClass('transparent');
    }
  });

  /* caret down*/

var caret = document.querySelector('.caret');

console.log(caret)

function toggleMenu(visible) {
    document.querySelector('.golden-menu').classList.toggle('show', visible)
}

caret.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("test");
    toggleMenu() 
});