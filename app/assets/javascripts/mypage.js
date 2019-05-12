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
});

