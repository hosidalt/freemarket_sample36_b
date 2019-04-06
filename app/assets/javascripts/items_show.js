$(function(){


  $(".sub-photo__list").mouseover(function(){
    $(".sub-photo__list").removeClass("active");
    $(".main-photo__list").removeClass("active");
    $(this).addClass("active");

    var index = function(selector, target){
      var nodeList = document.querySelectorAll(selector),
          element  = document.querySelector(target);

      return Array.prototype.indexOf.call(nodeList, element);
    };

    var index = index(".sub-photo__list", ".active");
    $(".main-photo__list").eq(index).addClass("active");

    var moveLeft = ('-300' * index) + "px"
    console.log(moveLeft)
    $(".main-photo__lists").attr("style", "left:" + moveLeft);
  })
})
