$('.item').click(function() {
  //operazioni di inizializazzione che riportano uno stadio di default
  $('.item').removeClass('red');
  // $('.item').children('.dropdown_menu').slideUp();

  $(this).addClass('red');

  var thisDropdownMenu = $(this).children('.dropdown_menu');

  if (thisDropdownMenu.hasClass('open')) {
    thisDropdownMenu.removeClass('open');
  }
  else {
    $('.dropdown_menu').removeClass('open');
    thisDropdownMenu.addClass('open');
  }
});

$('.item').mouseenter(function() {
  $('.item').removeClass('red');
  $(this).addClass('red');

  var thisDropdownMenu = $(this).children('.dropdown_menu');

  thisDropdownMenu.addClass('open');
});

$('.item').mouseleave(function() {
  var thisDropdownMenu = $(this).children('.dropdown_menu');

  thisDropdownMenu.removeClass('open');
});
