export const goTop = () => {
  const goTopBtn = document.getElementById('go-top-btn');
  console.log(goTopBtn);

  const scrollFunction = () => {
    if (document.documentElement.scrollTop > 64 && window.innerWidth <= 768) {
      goTopBtn.classList.add('show');
    } else {
      goTopBtn.classList.remove('show');
    }
  };

  goTopBtn.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
  });

  window.addEventListener('scroll', () => scrollFunction());
};
