(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          $('html, body').animate({
            scrollTop: 0
          }, 'medium');
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

$(document).ready(function(event) {
  $("form#quizquestions").submit(function(event) {
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    $("#greeting").html(firstName + " " + lastName);

    var points = parseInt($("input:radio[name=question1]:checked").val()) + parseInt($("input:radio[name=question2]:checked").val()) + parseInt($("input:radio[name=question3]:checked").val()) + parseInt($("input:radio[name=question4]:checked").val()) + parseInt($("input:radio[name=question5]:checked").val()) +
      parseInt($("input:radio[name=question6]:checked").val()) +
      parseInt($("input:radio[name=question7]:checked").val()) +
      parseInt($("input:radio[name=question8]:checked").val()) +
      parseInt($("input:radio[name=question9]:checked").val()) +
      parseInt($("input:radio[name=question10]:checked").val())

    if (points >= 41) {
      $('.result').html('<h2 class="center">You got...<br>Ruby on Rails!</h2><img class="center" src="img/ruby.png"/>');
    } else if (points >= 30) {
      $('.result').html('<h2 class="center">You got...<br>React and C#!</h2><img class="center" src="img/reactC.png"/>');
    } else if (points >= 20) {
      $('.result').html('<h2 class="center">You got...<br>Design/CSS!</h2><img class="center" src="img/design.png"/>');
    } else {
      $('.result').html('<h2 class="center">One or more questions left blank.</h2><img class="center" src="img/error.png"/>');
    }

    $("#resultBox").slideDown();

    $('html, body').animate({
      scrollTop: $("#resultBox").offset().top
    }, 2000);
    return false;

    event.preventDefault();
  });
});
