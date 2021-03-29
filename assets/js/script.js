// const aboutImgCard = document.querySelector('.aboutMe-image')

// if(window.innerWidth < 980) {
//   aboutImgCard.removeAttribute('class', 'card-image')
// }



var screenSize = $(window).width()

if(screenSize < 780){
    $(".aboutMe-image").removeClass("card-image")
  } 



document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

