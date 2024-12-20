export const initSlider = () => {
  const sliderContainer = document.querySelector('.slider_container');
  const sliderRow = document.querySelector('.slider_row');

  const nextBtn = document.querySelector('.next_btn');
  const prevBtn = document.querySelector('.prev_btn');

  let currentStep = 0;
  let fullSliderWidth = sliderContainer.scrollWidth;
  let visibleAreaOfSlider = sliderRow.offsetWidth;
  let counterClicks = visibleAreaOfSlider >= 768 ? 3 : 6;
  let stepSize = (fullSliderWidth - visibleAreaOfSlider) / counterClicks;

  const resetSlider = () => {
    currentStep = 0;
    sliderRow.style.transform = 'translateX(0px)';
    updateSliderPosition();
  };

  const recalculateValues = () => {
    resetSlider();
    fullSliderWidth = sliderContainer.scrollWidth;
    visibleAreaOfSlider = sliderRow.offsetWidth;
    counterClicks = visibleAreaOfSlider >= 768 ? 3 : 6;
    stepSize = (fullSliderWidth - visibleAreaOfSlider) / counterClicks;
  };

  const updateButtonStates = () => {
    prevBtn.disabled = currentStep === 0;
    nextBtn.disabled = currentStep === counterClicks;

    prevBtn.classList.toggle('active_button', currentStep > 0);
    nextBtn.classList.toggle('active_button', currentStep < counterClicks);
  };

  const updateSliderPosition = () => {
    const offset = -currentStep * stepSize;
    sliderRow.style.transform = `translateX(${offset}px)`;
    updateButtonStates();
  };

  nextBtn.addEventListener('click', () => {
    if (currentStep < counterClicks) {
      currentStep++;
      updateSliderPosition();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      updateSliderPosition();
    }
  });

  window.addEventListener('resize', () => recalculateValues());
};
