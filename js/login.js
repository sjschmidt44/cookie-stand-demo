var login = document.getElementById('login');
var submit = document.getElementById('login-submit');
var cancel = document.getElementById('login-cancel');

var navEls = document.getElementsByClassName('navs');
var navLogins = document.getElementsByClassName('nav-login');
var navLinks = document.getElementsByClassName('links');

login.addEventListener('click', function(event) {
  for (var i = 0; i < navEls.length; i++) {
    navEls[i].style.display = 'none';
  }

  for (var j = 0; j < navLogins.length; j++) {
    navLogins[j].style.display = 'inline-block';
  }
});

cancel.addEventListener('click', function(event) {
  for (var i = 0; i < navEls.length; i++) {
    navEls[i].style.display = 'inline-block';
  }

  for (var j = 0; j < navLogins.length; j++) {
    navLogins[j].style.display = 'none';
  }
});

submit.addEventListener('click', function(event) {
  event.preventDefault();

  for (var i = 0; i < navLogins.length; i++) {
    navLogins[i].style.display = 'none';
  }

  for (var j = 0; j < navLinks.length; j++) {
    navLinks[j].style.display = 'inline-block';
  }
});
