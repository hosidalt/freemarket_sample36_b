console.log('bad');
document.addEventListener('DOMContentLoaded', function(e) {
  var inputFile = document.getElementById('item-images');
  var some = document.getElementById('erasing-sentence');
  var imagesLists = document.getElementById('images-lists');
  var postArea = document.getElementById('post-images');
  function handleFileSelect(evt) {
    var files = evt.target.files;
    for (var i = 0, f; f = files[i]; i++) {
      if (!f.type.match('image.*')) {
        continue;
      }
      var reader = new FileReader();

      reader.onload = (function(theFile) {
        return function(e) {
          var li = document.createElement('li');
          li.innerHTML = `<figure class="item-figure">
  <img src="${e.target.result}" class="item-image" title="${escape(theFile.name)}">
</figure>
<div class="clearfix">
  <a href="#" id="edit">編集</a>
  <a href="#" id="delete">削除</a>
</div>`
          console.log(li);
          imagesLists.appendChild(li);
          console.log(imagesLists.children.length);
          postArea.classList.remove(`have-${imagesLists.children.length - 1}-item`);
          postArea.classList.add(`have-${imagesLists.children.length}-item`)
          if (imagesLists.children.length !== 0) {
            var deleteImage = document.getElementById('delete');
            deleteImage.addEventListener('click', function() {
              this.remove();
              console.log(this);
              console.log(this.parentNode);
              this.previousElementSibling.remove();
              this.parentNode.parentNode.remove();
            }, false);
          };
        };
      })(f);
      reader.readAsDataURL(f);
    }
  }
  inputFile.addEventListener('change', handleFileSelect, false);
});

