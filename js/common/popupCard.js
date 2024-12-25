export const initGiftModal = () => {
  const categorySuperpowers = {
    'For work': [
      { name: 'Live', value: 500, stars: 5 },
      { name: 'Create', value: 500, stars: 5 },
      { name: 'Love', value: 200, stars: 2 },
      { name: 'Dream', value: 400, stars: 4 },
    ],
    'For health': [
      { name: 'Live', value: 400, stars: 4 },
      { name: 'Create', value: 300, stars: 3 },
      { name: 'Love', value: 500, stars: 5 },
      { name: 'Dream', value: 400, stars: 4 },
    ],
    'For harmony': [
      { name: 'Live', value: 300, stars: 3 },
      { name: 'Create', value: 200, stars: 2 },
      { name: 'Love', value: 500, stars: 5 },
      { name: 'Dream', value: 500, stars: 5 },
    ],
  };

  const categoryColors = {
    'For work': 'blue',
    'For health': 'green',
    'For harmony': 'pink',
  };

  const setCategoryColor = (category) => {
    return categoryColors[category];
  };

  const disableScroll = () => body.classList.add('modal-open');
  const enableScroll = () => body.classList.remove('modal-open');

  const modal = document.querySelector('.dialog');
  const cards = document.querySelectorAll('.gift_card');
  const closeModalBtn = document.querySelector('.modal-close');
  const body = document.querySelector('body');

  const openModal = (card) => {
    const modalImage = document.getElementById('modal-image');
    const modalCategory = document.getElementById('modal-category');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalStats = document.getElementById('modal-stats');

    modalImage.src = card.dataset.image;
    modalImage.alt = card.dataset.title;

    modalCategory.classList.remove(setCategoryColor(modalCategory.textContent));
    modalCategory.textContent = card.dataset.category;
    modalCategory.classList.add(setCategoryColor(modalCategory.textContent));

    modalTitle.textContent = card.dataset.title;
    modalDescription.textContent = card.dataset.description;

    modalStats.textContent = '';

    const superpowers = categorySuperpowers[card.dataset.category];

    superpowers.forEach((power) => {
      const statContainer = document.createElement('div');
      statContainer.classList.add('stat_container');

      const statName = document.createElement('p');
      statName.textContent = power.name;
      statName.classList.add('first_p');
      statName.classList.add('font_p');

      const statValue = document.createElement('p');
      statValue.textContent = `+${power.value}`;
      statValue.classList.add('font_p');

      const starsContainer = document.createElement('div');
      starsContainer.classList.add('stars_container');

      for (let i = 0; i < 5; i++) {
        const star = document.createElement('img');
        star.classList.add('star');

        star.src =
          i < power.stars
            ? './../../assets/icons/Modal/snowflake_red.svg'
            : './../../assets/icons/Modal/snowflake_grey.svg';
        star.alt = i < power.stars ? 'Red start' : 'Grey Star';
        starsContainer.appendChild(star);
      }

      statContainer.appendChild(statName);
      statContainer.appendChild(statValue);
      statContainer.appendChild(starsContainer);

      modalStats.appendChild(statContainer);
    });
    disableScroll();
    modal.showModal();
  };

  const closeModal = () => {
    modal.close();
    enableScroll();
  };

  const handleEscape = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  }

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      openModal(card);
    });
  });

  closeModalBtn.addEventListener('click', closeModal);
  modal.addEventListener('keydown', handleEscape);  

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
};
