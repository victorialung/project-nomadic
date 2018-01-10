// Initialize Firebase
var config = {
  apiKey: "AIzaSyAHj80B6BW0qgmAuIRa65CKZaJrKlutQW8",
  authDomain: "project-nomadic.firebaseapp.com",
  databaseURL: "https://project-nomadic.firebaseio.com",
  projectId: "project-nomadic",
  storageBucket: "project-nomadic.appspot.com",
  messagingSenderId: "570392010848"
};
firebase.initializeApp(config);
/* Inicialize jquery */
$(document).ready(function () {
  var user = null;
  var usuariosConectados = null;
  // conexion con la base de datos
  var database = firebase.database();
  // llave unica por usuario-conexion
  var conectadoKey = '';

  var $loginBtn = $('#star-login');

  // eventos firebase
  $loginBtn.on('click', googleLogin);
  //$(window).on('unload', signOut); // cuando cierra la ventana se desloguea

  function googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // guarda usuario que da result
        user = result.user;
        // muestra contenido
        console.log(user);
        // ocultamos el div de login
        $('#login').fadeOut();

        // si el usuario se loguea podra entrar a la app
        initApp();
      });
  }

  function initApp() {
    // referencia a una tabla en base de datos
    usuariosConectados = database.ref('/connected');

    // 2 parametros, el 2do si no tiene displayName toma el email
    login(user.uid, user.displayName || user.email);
  }

  function login(uid, name) {
    // se crea un objeto en la base de datos y se guarda la referencia
    var conectado = usuariosConectados.push({
      uid: uid,
      name: name
    });
    // identificador unico del registro
    conectadoKey = conectado.key;
  }

  function signOut() {
    database.ref('/connected/' + conectadoKey).remove();
  }

  // Eventos para redireccionar a la vista newsfeed

  function redirect() {
    setTimeout(redirect, 3000);
    $(location).attr('href', 'views/newsfeed.html');
  }

});
