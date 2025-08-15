document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.cases__card');
  const cardsContainer = document.querySelector('.cases__cards');
  const loadMoreBtn = document.querySelector('.cases__more-btn');
  const casesMore = document.querySelector('.cases__more');

  const noCasesMessage = document.createElement('p');
  noCasesMessage.classList.add('cases__not-found');
  noCasesMessage.textContent = 'No cases found';
  noCasesMessage.style.display = 'none';
  cardsContainer.parentNode.insertBefore(noCasesMessage, cardsContainer);

  let initialVisibleCards = 12;
  let loadMoreClicked = false;

  const updateCardsVisibility = (tabIndex) => {
    let visibleCards = 0;
    let hasVisibleCards = false;

    cards.forEach((card) => {
      if ((card.getAttribute('data-tab-content') === tabIndex || tabIndex === '0') &&
        (loadMoreClicked || visibleCards < initialVisibleCards)) {
        card.style.display = 'flex';
        visibleCards++;
        hasVisibleCards = true;
      } else {
        card.style.display = 'none';
      }
    });

    noCasesMessage.style.display = hasVisibleCards ? 'none' : 'block';
    casesMore.style.display = (tabIndex === '0' && !loadMoreClicked && visibleCards < cards.length) ? 'flex' : 'none';
  };

  const carouselEl = document.querySelector('.tabs-carousel');
  const flkty = new Flickity(carouselEl, {
    contain: true,
    freeScroll: true,
    prevNextButtons: false,
    pageDots: false,
    draggable: true,
    selectedAttraction: 0.015,
  });

  let isDragging = false;

  flkty.on('dragStart', () => {
    isDragging = true;
  });

  flkty.on('dragEnd', () => {
    setTimeout(() => isDragging = false, 50);
  });

  carouselEl.addEventListener('click', (e) => {
    if (isDragging) return;

    const tab = e.target.closest('.cases__tab');
    if (!tab) return;

    carouselEl.querySelectorAll('.cases__tab').forEach(t => t.classList.remove('cases__tab--active'));
    tab.classList.add('cases__tab--active');

    const tabIndex = tab.getAttribute('data-tab');
    if (tabIndex !== '0') initialVisibleCards = 15;
    updateCardsVisibility(tabIndex);
  });

  loadMoreBtn.addEventListener('click', () => {
    initialVisibleCards = cards.length;
    loadMoreClicked = true;
    const activeTab = document.querySelector('.cases__tab--active').getAttribute('data-tab');
    updateCardsVisibility(activeTab);
  });

  updateCardsVisibility('0');
});