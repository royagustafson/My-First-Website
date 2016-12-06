
var bg = 0;
var int = self.setInterval( "changeBG()", 5000 );
var array = [ "../img/bg1.jpg", "../img/bg2.jpg", "../img/bg3.jpg", "../img/bg4.jpg", ];

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
});

function changeBG(){
  bg = (bg+1) % array.length;
  $('.parallax').css('background-image', 'url("' + array[bg] + '")');}
$(window).scroll( function() {
  if( $(this).scrollTop() > $(window).height()) {
    $('header').css({
      'position': 'fixed',
      'top': '0',
      'width': '100%'
    });
    $('.rowbox').css('margin-top', '90pt');
  } else {
    $('header').css('position','static');
    $('.rowbox').css('margin-top', '0');
  }
});
