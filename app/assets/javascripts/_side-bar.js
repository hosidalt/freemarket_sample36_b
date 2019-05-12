// $(function(){
//   $(".side-bar__nav__list-content__item").on("click", function(){
//     console.log("test")
//     var index = $(".side-bar__nav__list-content__item").index(this);
//     $(".side-bar__nav__list-content__item").removeClass("active");
//     console.log("test")
//     $(this).addClass("active");
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
  if (window.location.href.match(/logouts/)) {
    var sideBarItem = document.getElementsByClassName('side-bar__nav__list-content__item');
    console.log(sideBarItem);
    sideBarItem[0].classList.remove('active');
    sideBarItem[22].classList.add('active');
  };
});
