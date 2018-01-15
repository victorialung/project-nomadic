/* funcionalidad de registro*/
$(document).ready(function() {
  // seleccionando elementos del DOM
  var $email = $('#inputEmail');
  var $password = $('#inputPassword');
  var $checkbox = $('input[type=checkbox]');
  var $submit = $('button[type=submit]');
  // variables verificadoras booleanas
  var verifyEmail = false;
  var verifyPassword = false;
  var verifyCheck = false;
  // variable para la longitud de inputPassword
  var lng = new RegExp('^(?=.{6,})');


  // asociando eventos a los elementos seleccionados
  $email.on('input', function(event) {
    // console.log(event.target.value);
    console.log($(this).val());
    var patternEmail = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    console.log(patternEmail.test($(this).val()));
    if (patternEmail.test($(this).val())) {
      verifyEmail = true;
      activeButton();
    } else {
      verifyEmail = false;
      desactiveButton();
    }
  });

  $password.on('input', function() {
    if ($(this).val().length >= 6) {
      verifyPassword = true;
      activeButton();
    } else {
      verifyPassword = false;
      desactiveButton();
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

  $checkbox.on('click', function(event) {
    // console.log(event.target.checked);
    if (event.target.checked) {
      verifyCheck = true;
      activeButton();
    } else {
      verifyCheck = false;
      desactiveButton();
    }
  });

  $submit.on('click', function(event) {
    event.preventDefault();// esto evita para que no se borre los datos ingresados
    localStorage.email = $email.val();
    localStorage.password = $password.val();
    window.location.href = '../views/login.html';
  });

  // activando boton "SIGNUP"
  function activeButton() {
    console.log(verifyEmail && verifyPassword && verifyCheck);
    if (verifyEmail && verifyPassword && verifyCheck) {
      $submit.attr('disabled', false);
    }
  }

  function desactiveButton() {
    $submit.attr('disabled', true);
  }
});
