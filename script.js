let currentIndex = 0;

function showSlide(index) {
  const carousel = document.getElementById('productCarousel');
  const totalSlides = document.querySelectorAll('.carousel-item').length;

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const translateValue = -currentIndex * 100 + '%';
  carousel.style.transform = 'translateX(' + translateValue + ')';
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Automatically rotate through the featured products
setInterval(nextSlide, 3000); // Adjust the interval as needed
