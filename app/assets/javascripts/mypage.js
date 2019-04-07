// $(function(){
//   $(".mypage_tab").on("click", function(){
//     var tab = $(this).data("tab");
//     var $th = $(this).index(tab);
//     console.log(tab);
//     $(".mypage_tab").removeClass("active");
//     $(".tab_panel").removeClass("active");
//     $(this).addClass("active");
//     $(".tab_panel").eq($th).addClass("active")
//   });
// });


$(function(){
  $(".notification-todo").on("click", function(){
    var $th = $(this).index();
    $(".notification-todo").removeClass("active");
    $(".notifi-todo_panel").removeClass("active");
    $(this).addClass("active");
    $(".notifi-todo_panel").eq($th).addClass("active")
  });
});

$(function(){
  $(".purchase").on("click", function(){
    var $th = $(this).index();
    $(".purchase").removeClass("active");
    $(".purchase_panel").removeClass("active");
    $(this).addClass("active");
    $(".purchase_panel").eq($th).addClass("active")
  });
});

$(function(){
  $(".mypage-nav__list-item").on("click", function(){
    console.log('text')
    var index = $(".mypage-nav__list-item").index(this);
    $(".mypage-nav__list-item").removeClass("active");
    $(this).addClass("active");
  });
});
