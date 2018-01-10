window.addEventListener('load', function (event) {
  var post = document.getElementById('post');
  var btnSave = document.getElementById('btnsave');


  post.addEventListener('input', function (event) {
    console.log(event.target.value); // -- obtengo el valor textual de mi target
  })

  btnSave.addEventListener('click', function (event) {

    event.preventDefault();
    var postValue = post.value;
    // console.log(nameValue);
    var containerPost= document.getElementById('container-post');
    var containerLi = document.createElement('li');
    var brLine = document.createTextNode('  ');
    var newText = document.createTextNode(postValue);
    containerLi.appendChild(newText);
    containerLi.appendChild(brLine);
    containerContact.appendChild(containerLi);
    //console.log(name.value);
    post.value = '';
  })

})