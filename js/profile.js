
window.addEventListener('load', function() {
  // Función para validar el contenido del post
  function validatePost(text) {
    if (text === null || text === '' || text.length < 1) {
      return false;
      // insertar aqui modal que le diga el usuario que tiene que ingresar contenido y no enviar comentarios vacios
    } else {
      return true;
    }
  }

  // Función de aviso de error de postear contenido vacio
  function showError() {
    var contentHtml = '';
    contentHtml += '<div class="alert alert-danger" role="alert">';
    contentHtml += 'You can not send a empty message!';
    contentHtml += '</div>';

    document.getElementById('header-modal-error').innerHTML = contentHtml;
  }

  // Función para limpiar el aviso del error
  function cleanError() {
    document.getElementById('header-modal-error').innerHTML = '';
  }

  // Función para publicar contenido
  function createContent() {
    var contentTextarea = document.getElementById('header-form-control').value;
    if (!validatePost(contentTextarea)) {
      showError();
      return;
    }
    document.getElementById('header-form-control').value = '';
    cleanError();

    // agregando fecha al post
    var dateReference = new Date();
    var idDateReference = dateReference.getTime();
    // Este método nos ayuda a insertar la fecha dentro del formato de tiempo que tiene el lugar donde reside el usuario
    var date = dateReference.toLocaleDateString();
    var text = contentTextarea;

    // creando un JSON = JavaScript Object Notation - lo usamos para guardarlo en el localStorage

    var newsFeed = {
      'id': idDateReference,
      'date': date,
      'texto': text,
    };
    validateNewsFeed(newsFeed);
  }

  function validPost(dataNewsFeed) {
    if (dataNewsFeed == null || dataNewsFeed == '') {
      return false;
    } else {
      return true;
    }
  }

  // función para localStorage

  function validateNewsFeed(newsFeed) {
    var dataNewsFeed = localStorage.getItem('newsFeeds');
    if (!validPost(dataNewsFeed)) {
      var newsFeeds = [];
      newsFeeds.push(newsFeed);
      // guardar el nuevo contenido
      saveNewsFeedPost(newsFeeds);
      // guardando post de usuario antiguo
    } else {
      var saveNewsFeed = JSON.parse(dataNewsFeed);
      // saveNewsFeed.push(newsFeed);
      saveNewsFeedPost(saveNewsFeed);
    }
    // mostrando los posts
    showNewsFeed();
  }

  // función para guardar posts en JSON
  function saveNewsFeedPost(newsFeeds) {
    var newsFeedJSON = JSON.stringify(newsFeedS);
    localStorage.setItem('newsFeedS', newsFeedJSON);
    // localStorage.setItem("usuario", newUser);
  }

  function showNewsFeed() {
    var newContentHtml = '';
    var dataNewsFeed = localStorage.getItem('newsFeeds');
    if (!validPost(dataNewsFeed)) {
      newContentHtml = 'You have not shared any adventure yet';
      document.getElementById('old-posts').innerHTML = newContentHtml;
    } else {
      console.log(dataNewsFeed);
      var saveNewsFeed = JSON.parse(dataNewsFeed);
      for (var i = 0; i < saveNewsFeed.length; i++) {
        // Añadir post al HTML
        newContentHtml += erasePost(saveNewsFeed[i]);
      }
      document.getElementById('old-posts').innerHTML = newContentHtml;
    }
  }

  function erasePost(newsFeed) {
    var eraseContentPost = '';
    eraseContentPost += '<div class="newsfeedPost rounded bg-whitesmoke" id=" ' + newsFeed.idDateReference + '">';
    eraseContentPost += '<div class="row p-2 ">';
    eraseContentPost += '<div class="col-sm-8 col-md-8 text-left ">';
    eraseContentPost += '<span class="ft-grey text-center feedback" id="username"> Micaela Bastidas</span>' + ' ' + ' ' + '<small class="feedback-icon"><i class="fa fa-calendar-o " aria-hidden="true"></i> ' + newsFeed.date + '</small>';
    // eraseContentPost += '<small><i class="fa fa-window-close text-right" aria-hidden="true"></i></small>';
    eraseContentPost += '</div>';
    eraseContentPost += '<br>';
    eraseContentPost += '</div>';
    eraseContentPost += '<div class="col-md-12 p-2 rounded bg-whitesmoke ">';
    eraseContentPost += newsFeed.text;
    eraseContentPost += '</div>';
    eraseContentPost += '</div>';
    eraseContentPost += '<br>';

    return eraseContentPost;
  }


  // Fijamos un evento(callback) que asocie el evento "onclick" del btn-save con la function createContent
  document.getElementById('btn-save').onclick = createContent;
  showNewsFeed();
});