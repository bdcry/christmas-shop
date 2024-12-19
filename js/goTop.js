export const goToTop = () => {
  const goTopBtn = document.getElementById('go-top-btn');

  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (document.documentElement.scrollTop > 100 && window.innerWidth <= 768) {
      goTopBtn.style.display = 'block';
    } else {
      goTopBtn.style.display = 'none';
    }
  };

  goTopBtn.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
  });
};
