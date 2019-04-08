$(function(){
  $(".notification-todo").on("click", function(){
    var $th = $(this).index();
    $(".notification-todo").removeClass("active");
    $(".notifi-todo_panel").removeClass("active");
    $(this).addClass("active");
    $(".notifi-todo_panel").eq($th).addClass("active")
  });

  $(".purchase").on("click", function(){
    var $th = $(this).index();
    $(".purchase").removeClass("active");
    $(".purchase_panel").removeClass("active");
    $(this).addClass("active");
    $(".purchase_panel").eq($th).addClass("active")
  });

  $(".mypage-nav__list-item").on("click", function(){
    var index = $(".mypage-nav__list-item").index(this);
    $(".mypage-nav__list-item").removeClass("active");
    $(this).addClass("active");
  });
});
