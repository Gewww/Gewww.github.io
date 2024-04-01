var slideIndex = 0;
var slides = document.getElementsByClassName("sl");

function showSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";

}

function previousSlide() {
  if (slideIndex === 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex--;
  }

  showSlide();
}

function nextSlide() {
  if (slideIndex === slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }

  showSlide();
}


showSlide();
// file
const slider = document.querySelector('.slider');
const fileInput = document.getElementById('file');
function handleFileInput(event) {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const newSlide = document.createElement('img');
          newSlide.className = 'sl';
          newSlide.src = e.target.result;
          newSlide.alt = 'Slide ' + (slider.children.length + 1);
          slider.insertBefore(newSlide, document.getElementById('plus'));
        };
        reader.readAsDataURL(fileList[0]);
      }
}
fileInput.addEventListener('change', handleFileInput);
function previousSlide() {
    const slides = document.querySelectorAll('.sl');
    const currentSlide = Array.from(slides).findIndex(slide => slide.style.display !== 'none');
    const previousSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].style.display = 'none';
    slides[previousSlide].style.display = 'block';
}

function nextSlide() {
  const slides = document.querySelectorAll('.sl');
  const currentSlide = Array.from(slides).findIndex(slide => slide.style.display !== 'none');
  const nextSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'none';
  slides[nextSlide].style.display = 'block';
}