$(document).ready(function() {
  // seleccionando elementos del DOM
  var $email = $('#inputEmail');
  var $password = $('#inputPassword');
  // asociar el evento al elemento seleccionado
  $email.on('input', function() {
    if ($(this).val() === localStorage.email) {
      console.log('correo ok');
    } else {
      console.log('el correo no esta registrado');
    }
  });
  $password.on('input', function() {
    if ($(this).val() === localStorage.password) {
      console.log('password ok');
    } else {
      console.log('password equivocado');
    }
  });
  // muestra que como minimo tiene q ser 6 caracteres
  $(function() {
    // variable para la longitud de inputPassword
    var length = new RegExp('^(?=.{6,})');

    $password.on('keyup', function() {
      var pass = $password.val();

      if (length.test(pass)) {
        $('#mensaje').text('password seguro').css('color', 'green');
      } else {
        $('#mensaje').text('password inseguro').css('color', 'red');
      }
    });
  });

  $submit.on('click', function(event) {
    event.preventDefault();
    if ($email.val() === localStorage.email && $password.val() === localStorage.password) {
      alert('Bienvenido a la comunidad Nomadic');
      window.location.href = '../viewss/newfeed.html';
    } else {
      alert('you need register');
      window.location.href = '../views/signup.html';
    }
  });
});
