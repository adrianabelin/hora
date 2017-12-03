$(document).ready(function(){

  $('#go_about').click(function () {
    $('html, body').animate({
      scrollTop: $('#about').offset().top //Ofset calculated where scroll animaiton will be
    }, 900);
  });

  $('#go_news').click(function () {
    $('html, body').animate({ //for different browsers. Html and body means same.
      scrollTop: $('#news').offset().top //top portion of two
    }, 900);
  });

  $('#go_events').click(function () {
    $('html, body').animate({
      scrollTop: $('#events').offset().top
    }, 900);
  });

  $('#go_contact').click(function () {
    $('html, body').animate({
      scrollTop: $('#contact').offset().top
    }, 900);
  });



});
