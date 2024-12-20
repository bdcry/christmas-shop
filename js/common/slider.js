export const initSlider = () => {
  const sliderWrapper = document.querySelector('.slider_wrapper');
  const sliderRow = document.querySelector('.slider_row');

  const nextBtn = document.querySelector('.next_btn');
  const prevBtn = document.querySelector('.prev_btn');

  let currentStep = 0;
  let visibleAreaOfSlider = sliderWrapper.offsetWidth;
  let fullSliderWidth = sliderRow.scrollWidth;
  let counterClicks = visibleAreaOfSlider >= 752 ? 3 : 6;
  let stepSize = (fullSliderWidth - visibleAreaOfSlider) / counterClicks;

  const resetSlider = () => {
    currentStep = 0;
    sliderRow.style.transform = 'translateX(0px)';
    updateSliderPosition();
  };

  const recalculateValues = () => {
    fullSliderWidth = sliderRow.scrollWidth;
    visibleAreaOfSlider = sliderWrapper.offsetWidth;
    counterClicks = visibleAreaOfSlider >= 752 ? 3 : 6;
    stepSize = (fullSliderWidth - visibleAreaOfSlider) / counterClicks;
    resetSlider();
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

  window.addEventListener('resize', recalculateValues);
};