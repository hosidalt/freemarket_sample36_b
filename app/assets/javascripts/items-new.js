document.addEventListener('DOMContentLoaded', function(e) {
  var inputFile = document.getElementById('input-images');
  var some = document.getElementById('erasing-sentence');
  var imagesLists = document.getElementById('images-lists');
  var postArea = document.getElementById('post-images');
  var imagesContainer = document.getElementById('item-images-container');
  var imagesLists2 = document.getElementById('images-lists2');
  var imagesContainer2 = document.getElementById('item-images-container2');
  var num = 0; //input file内の画像の枚数を把握

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
          console.log(num);
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
              console.log()
              postArea.classList.remove(`have-${num}-item`);
              this.parentNode.parentNode.remove();
              this.parentNode.remove();
              this.remove();
              //thisを最後に削除しないと、parentNodeなどが認識されなくなる
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
            console.log(list);
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

  var inputPrice = document.getElementById('price-input');
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

  var firstCategory = document.getElementById('first-category-select');
  var categoryForm = document.getElementById('category-form');

  firstCategory.addEventListener('change', function() {
    if (this.value !== "" && document.getElementById('second-category') === null) {
      var selectWrap = document.createElement('div');
      selectWrap.classList.add('select-wrap');
      selectWrap.innerHTML = `<select id="second-category">
      <option value="">---</value>
      <option value="レディース">レディース</value>
      <option value="メンズ">メンズ</value>
      <option value="ベビー・キッズ">ベビー・キッズ</value>
      <option value="インテリア・住まい・小物">インテリア・住まい・小物</value>
      <option value="本・音楽・ゲーム">本・音楽・ゲーム</value>
      </select>`;
      categoryForm.appendChild(selectWrap);
      var secondCategory = document.getElementById('second-category');
      console.log(secondCategory);
      secondCategory.addEventListener('change', function() {
        if (this.value !== "" && document.getElementById('third-category') === null) {
          var selectWrap = document.createElement('div');
          selectWrap.classList.add('select-wrap');
          selectWrap.innerHTML = `<select id="third-category">
          <option value="">---</value>
          <option value="">レディース</value>
          <option value="">メンズ</value>
          <option value="">ベビー・キッズ</value>
          <option value="">インテリア・住まい・小物</value>
          <option value="">本・音楽・ゲーム</value>
          </select>`;
          var thirdCategory = document.getElementById('third-category');
          categoryForm.appendChild(selectWrap);
        };
      });
      secondCategory.addEventListener('change', function() {
        var thirdCategory = document.getElementById('third-category');
        if (this.value === "" && thirdCategory != null) {
          thirdCategory.parentNode.remove();
          thirdCategory.remove();
        };
      });
    }else if (this.value === "") {
      var secondCategory = document.getElementById('second-category');
      secondCategory.parentNode.remove();
      secondCategory.remove();
      if (document.getElementById('third-category') !== null) {
        var thirdCategory = document.getElementById('third-category');
        thirdCategory.parentNode.remove();
        thirdCategory.remove();
      };
    };
  });
  //データを引っ張った時に必要になる関数。
  // function getSelectLabel(idname){
  //   console.log(idname);
  //   var idx = idname.selectedIndex;       //インデックス番号を取得
  //   var val = idname.options[idx].value;  //value値を取得
  //   var txt  = idname.options[idx].text;  //ラベルを取得
  //   console.log(idx);
  //   console.log(val);
  //   console.log(txt);
  // };

  var deliveryCost = document.getElementById('delivery-cost');
  var deliveryBox = document.getElementById('delivery-box');
  deliveryCost.addEventListener('change', function() {
    if (this.value !== "" && document.getElementById('how-to-delivery') === null) {
      var formHowDelivery = document.createElement('div');
      formHowDelivery.classList.add('form-group');
      var h3 = document.createElement('h3');
      h3.textContent = "配送の方法";
      var span = document.createElement('span');
      span.textContent = "必須";
      h3.appendChild(span);
      formHowDelivery.appendChild(h3);
      var selectWrap = document.createElement('div');
      selectWrap.classList.add('select-wrap');
      selectWrap.innerHTML = `<select id="how-to-delivery">
      <option value="">---</value>
      <option value="0">未定</value>
      <option value="1">らくらくメルカリ便</value>
      <option value="2">ゆうメール</value>
      <option value="3">レターパック</value>
      <option value="4">普通郵便（定型・定型外）</value>
      <option value="5">クロネコヤマト</value>
      <option value="6">ゆうパック</value>
      <option value="7">クリックポスト</value>
      <option value="8">ゆうパケット</value>
      </select>`;
      deliveryBox.appendChild(formHowDelivery);
      deliveryBox.appendChild(selectWrap);
    }else if (this.value === "" && document.getElementById('how-to-delivery') !== null) {
      document.getElementById('how-to-delivery').parentNode.previousElementSibling.remove();
      document.getElementById('how-to-delivery').parentNode.remove();
      document.getElementById('how-to-delivery').remove();
    };
  });



});



