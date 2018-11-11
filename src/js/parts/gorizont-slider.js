function gorizontalSlider() {
    let activeIndex = 0,
        sliderContainer = document.querySelector('.feedback-slider'),
        sliderItems = document.querySelectorAll('.feedback-slider-item'),
        sliderPrev = document.querySelector('.gorizontal-slider__prev-btn'),
        sliderNext = document.querySelector('.gorizontal-slider__next-btn'),
        timerVert;
  
    function changeSlide() {
      clearInterval(timerVert);
  
      sliderItems.forEach(function (item, index) {
        if (index === activeIndex) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
      timerVert = setInterval(function () {
        sliderNext.click();
      }, 5000);
    }
  
  
    sliderNext.addEventListener('click', function () {
      activeIndex++;
  
      if (activeIndex === sliderItems.length) {
        activeIndex = 0;
      }
  
      changeSlide();
    });
  
    sliderPrev.addEventListener('click', function () {
      if (activeIndex === 0) {
        activeIndex = sliderItems.length;
      }
  
      activeIndex--;
  
      changeSlide();
    });
  
    sliderContainer.addEventListener('mouseenter', function (e) {
      clearInterval(timerVert);
    });
  
    sliderContainer.addEventListener('mouseleave', function (e) {
      setInterval(timerVert);
      changeSlide();
    });
  
    timerVert = setInterval(function () {
      sliderNext.click();
    }, 5000);
    changeSlide();
  }

  module.exports = gorizontalSlider;