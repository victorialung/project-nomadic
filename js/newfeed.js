// Función para poder subir imagen-dinamico
// $('preview').hover(function () {
//   $(this).find('a').fadeIn();
// }, function () {
//   $(this).find('a').fadeOut();
// }

// );

// $('#file-select').on('click', function (e) {
//   e.preventDefault();

//   $('#file').click();
// });

// $('input[type=file]').change(function () {
//   var file = (this.files[0].name).toString();
//   var reader = new FileReader();
//   $('#file-info').text('');
//   $('file-info').text(file);

//   reader.onload = funtion(e){
//     $('#preview img').attr('src', e.target.result);
//   };

//   reader.readerDataURL(this.files[0]);
// });


window.addEventListener('load', function(event) {
  var post = document.getElementById('post');
  var btnSave = document.getElementById('btnSave');


  post.addEventListener('input', function(event) {
    console.log(event.target.value); // -- obtengo el valor textual de mi target
  });

  btnSave.addEventListener('click', function(event) {
    event.preventDefault();
    var postValue = post.value;
    // console.log(nameValue);
    var containerPost = document.getElementById('container-post');
    var containerLi = document.createElement('li');
    var brLine = document.createTextNode('  ');
    var newText = document.createTextNode(postValue);
    containerLi.appendChild(newText);
    containerLi.appendChild(brLine);
    containerPost.appendChild(containerLi);
    // console.log(name.value);
    post.value = '';
  });

  // -------------  añadiendo imgs --------------
  $('#photo').on('change', function(ev) {
    var photo = ev.target.files[0];
    var fr = new FileReader();

    fr.onload = function(ev2) {
      console.dir(ev2);
      $('#i').attr('src', ev2.target.result);
    };

    fr.readAsDataURL(photo);
  });
});

