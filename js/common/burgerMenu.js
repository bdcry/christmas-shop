const initBurgerMenu = () => {
  const burgerButton = document.querySelector('.bars');
  const burgerPopup = document.querySelector('.popup_burger_menu');
  const burgerMenu = document.querySelector('.header_burger');
  const menuLinks = document.querySelectorAll('.nagivation_tab');
  const body = document.querySelector('body');

  burgerButton.addEventListener('click', () => {
    burgerPopup.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    body.classList.toggle('noscroll');
  });

  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {
      burgerPopup.classList.remove('active');
      burgerMenu.classList.remove('active');
      body.classList.remove('noscroll');
    });
  });
};

export default initBurgerMenu;
