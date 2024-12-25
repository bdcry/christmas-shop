const handleTabClick = (tabs, tab, cards) => {
  tabs.forEach((tab) => tab.classList.remove('active_filter_btn'));
  tab.classList.add('active_filter_btn');

  const selectedCategory = tab.dataset.category;

  cards.forEach((card) => {
    if (selectedCategory === 'All' || selectedCategory === card.dataset.category) {
      card.classList.add('filter_category_active');
      card.classList.remove('filter_category_disable');
    } else {
      card.classList.add('filter_category_disable');
    }
  })
};


const initGiftFilters = () => {
  const tabs = document.querySelectorAll('.filter_btn');
  const cards = document.querySelectorAll('.gift_card');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => handleTabClick(tabs, tab, cards));
  });
};

export default initGiftFilters;
