const btnPrev = document.querySelector('.prev-button');
const btnNext = document.querySelector('.next-button');
const slides   = Array.from(document.querySelectorAll('.team__frame-wrapper'));
const slideCount = slides.length;

let slideIndex = 0;

btnNext.addEventListener('click', showNextSlide);
btnPrev.addEventListener('click', showPrevSlide);

function showNextSlide() {
  if (slideIndex === slideCount - 1) slideIndex = 0;
  else slideIndex++;
  updateSlider();
}

function showPrevSlide() {
  if (slideIndex === 0) slideIndex = slideCount - 1;
  else slideIndex--;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? 'block' : 'none';
  });
}

updateSlider();
