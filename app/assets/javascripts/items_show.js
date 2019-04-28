$(function(){

  var itemsIndex = $(".sub-photo__list").length;
  var itemsWidth = (300 * itemsIndex) + "px"
  $(".main-photo__lists").attr("style", "width:" + itemsWidth);
  $(".main-photo__list:first").addClass("active");
  $(".sub-photo__list:first").addClass("active");

  if (itemsIndex < 5) {
    $(".sub-photo__list").attr("style", "width:" + "75px");
  } else if(itemsIndex == 5) {
    $(".sub-photo__list").attr("style", "width:" + "60px");
  } else {
    $(".sub-photo__list").attr("style", "width:" + "60px").height("60px");
    $(".item-box__main--table").attr("style", "height:" + "420px")
  };

  $(".sub-photo__list").mouseover(function(){
    $(".sub-photo__list").removeClass("active");
    $(".main-photo__list").removeClass("active");
    $(this).addClass("active");

    var index = function(selector, target){
      var nodeList = document.querySelectorAll(selector),
          element  = document.querySelector(target);

      return Array.prototype.indexOf.call(nodeList, element);
    };

    var itemsIndex = $(".sub-photo__list").length;
    var itemsWidth = (300 * itemsIndex) + "px"


    var index = index(".sub-photo__list", ".active");
    $(".main-photo__list").eq(index).addClass("active");

    var moveLeft = ('-300' * index) + "px"

    $(".main-photo__lists").attr("style", "left:" + moveLeft).width(itemsWidth);
  })
})
