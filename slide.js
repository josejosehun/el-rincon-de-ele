$(function() {

  var width = 250;
  var animationTime = 2000;
  var pause = 4000;
  var currentSlide = 1;

  var slideContainer = $('#slide-container');
  var slider = $(slideContainer).find('.slider');
  var slides = $(slider).find('.slide');
  
  var imageInterval;

  function startSlider() {
  imageInterval = setInterval(function() {
    $(slider).animate({'margin-left': '-=' + width}, animationTime, function() {
      currentSlide++;
      if (currentSlide == slides.length) {
        currentSlide = 1;
        $(slider).css({'margin-left': '0'});
      }
    });
  }, pause);
  }
  
  function pauseSlider() {
    clearInterval(imageInterval);
  }
  $(slides).on('mouseenter', pauseSlider).on('mouseleave', startSlider);
  startSlider();
});