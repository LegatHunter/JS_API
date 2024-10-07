const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function updateSlider(index) {
  slides.forEach(slide => slide.classList.remove('active'));

  slides[index].classList.add('active');

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider(currentIndex);
});

document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider(currentIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSlider(currentIndex);
  });
});

updateSlider(currentIndex);
