document.addEventListener('DOMContentLoaded', function(e) {
  if (window.location.href.match(/\/products\/new/)) {
    var inputFile = document.getElementById('item_images_attributes_0_image');
    var some = document.getElementById('erasing-sentence');
    var imagesLists = document.getElementById('images-lists');
    var postArea = document.getElementById('post-images');
    var imagesContainer = document.getElementById('item-images-container');
    var imagesLists2 = document.getElementById('images-lists2');
    var imagesContainer2 = document.getElementById('item-images-container2');
    var num = 0;

    function handleFileSelect(evt) {
      var files = evt.target.files;
      for (var i = 0, f; f = files[i]; i++) {
        if (!f.type.match('image.*')) {
          continue;
        }
        var reader = new FileReader();

        reader.onload = (function(theFile) {
          return function(e) {
            num++;
            function createList() {
              var li = document.createElement('li');
              var figure = document.createElement('figure');
              figure.classList.add('item-figure');
              var img = document.createElement('img');
              img.src = e.target.result;
              img.classList.add('item-image');
              img.title = escape(theFile.name);
              var clearfixDiv = document.createElement('div');
              clearfixDiv.classList.add('clearfix');
              var edit = document.createElement('a');
              var remove = document.createElement('a');
              edit.setAttribute("id", "edit");
              remove.setAttribute("id", "remove");
              edit.textContent = "編集";
              remove.textContent = "削除";
              li.appendChild(figure);
              figure.appendChild(img);
              li.appendChild(clearfixDiv);
              clearfixDiv.appendChild(edit);
              clearfixDiv.appendChild(remove);
              remove.addEventListener('click', function() {
                postArea.classList.remove(`have-${num}-item`);
                this.parentNode.parentNode.remove();
                this.parentNode.remove();
                this.remove();
                num--;
                postArea.classList.add(`have-${num}-item`);
                if ( num < 6 ) {
                  imagesLists2.classList.add('hidden');
                  imagesContainer2.classList.add('hidden');
                }
              }, false);
              return li;
            };

            function changePostArea() {
              postArea.classList.remove(`have-${num - 1}-item`);
              postArea.classList.add(`have-${num}-item`);
            };

            if ( num <= 5 ) {
              var list = createList();
              imagesLists.appendChild(list);
              changePostArea();
            }else if ( num == 6 ) {
              imagesLists2.classList.remove('hidden');
              imagesContainer2.classList.remove('hidden');
              var list = createList();
              imagesLists2.appendChild(list);
              changePostArea();
            }else if ( num > 6 ) {
              var list = createList();
              imagesLists2.appendChild(list);
              changePostArea();
            }
          };
        })(f);
        reader.readAsDataURL(f);
      }
    }
    inputFile.addEventListener('change', handleFileSelect, false);

    var inputPrice = document.getElementById('item_price');
    var commission = document.getElementById('commission-result');
    var benefit = document.getElementById('benefit-result');
    var hundredsPattern = /^[3-9]\d{2}$/;
    var morePattern = /^[1-9]\d{3,6}$/;
    inputPrice.addEventListener('keyup', function() {
      if ( hundredsPattern.test(inputPrice.value) || morePattern.test(inputPrice.value) ) {
        var commissionResult = separate(Math.floor( inputPrice.value / 10 ));
        commission.textContent = "¥" + commissionResult;
        var benefitResult = separate( inputPrice.value - Math.floor( inputPrice.value / 10 ) );
        benefit.textContent = "¥" + benefitResult;
      }else {
        commission.textContent = "-";
        benefit.textContent = "-";
      };
    });

    function separate(num){
      return String(num).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    }

    var parentCategory = document.getElementById('item_parent_category_id');
    var childCategory = document.getElementsByClassName('childCategory');
    var grandchildCategory = document.getElementsByClassName('grandchildCategory');
    var categoryForm = document.getElementById('category-form');
    var shippingMethod = document.getElementById('shipping-method-select');
    var feePayer = document.getElementById('item_delivery_fee_payer');
    feePayer.addEventListener('change', function() {
      if (feePayer.value !== "") {
        shippingMethod.classList.remove('hidden');
      }else if (feePayer.value === "") {
        shippingMethod.classList.add('hidden');
      };
    });
  };
});
