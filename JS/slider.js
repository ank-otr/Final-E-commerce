const slides = document.querySelectorAll(".slide");
var counter = 0;
var direction = 1; // 1 = forward, -1 = backward

// Disable buttons if there are no slides
if (slides.length === 0) {
  document.querySelector('.next').disabled = true;
  document.querySelector('.prev').disabled = true;
}

slides.forEach(
  (slide, index) => {
    slide.style.left = `${index * 100}%`;
  }
);

const goNext = () => {
  if (counter < slides.length - 1) {
    counter++;
    slideImage();
    if (counter === slides.length - 1) {
      // Disable "Next" button when last slide is reached
      document.querySelector('.next').disabled = true;
    } else {
      // Enable "Next" button if not on last slide
      document.querySelector('.next').disabled = false;
    }
    // Enable "Prev" button if not on first slide
    document.querySelector('.prev').disabled = false;
  }
};

const goPrev = () => {
    if (counter > 0) {
      counter--;
      slideImage();
      if (counter === 0) {
        // Disable "Prev" button when first slide is reached
        document.querySelector('.prev').disabled = true;
      } else {
        // Enable "Prev" button if not on first slide
        document.querySelector('.prev').disabled = false;
      }
      // Enable "Next" button if not on last slide
      document.querySelector('.next').disabled = false;
    } else {
      // Disable "Prev" button if on first slide
      document.querySelector('.prev').disabled = true;
    }
  };

const slideImage = () => {
  slides.forEach(
    (slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    }
  );
};

const autoSlide = () => {
  if (direction === 1) {
    goNext();
  } else {
    goPrev();
  }
  if (counter === 0 || counter === slides.length - 1) {
    direction *= -1; // Change direction when reaching the end
  }
};

setInterval(autoSlide, 4000); // Call autoSlide every 4 seconds
