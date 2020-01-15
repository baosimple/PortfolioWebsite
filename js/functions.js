// parallax
$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.logo').css({
    'transform' : 'translate(0px, '+ wScroll /3.4 +'%)'
  });

  //landing elements
  if(wScroll > $('#contact').offset().top-500) {
    $('.formStyle input').each(function(){
      $('.formStyle input').addClass('is-showing');
    });

  }

  if(wScroll > $('#contact').offset().top-500) {
    console.log('hi')
    $('.formStyle textarea').each(function(){
      $('.formStyle textarea').addClass('is-showing');
    });

  }

  if(wScroll > $('#contact').offset().top-500) {
    $('.formStyle a').each(function(){
      $('.formStyle a').addClass('is-showing');
    });

  }

  if(wScroll < $('#contact').offset().top-500) {
    $('.formStyle input').each(function(){
      $('.formStyle input').removeClass('is-showing');
    });

  }

  if(wScroll < $('#contact').offset().top-500) {
    $('.formStyle textArea').each(function(){
      $('.formStyle textArea').removeClass('is-showing');
    });

  }

  if(wScroll < $('#contact').offset().top-500) {
    $('.formStyle a').each(function(){
      $('.formStyle a').removeClass('is-showing');
    });

  }

});

// jQuery Smooth Scroll
$('a[href*="#"]').on('click', function(e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    500,
    'linear'
  )
})