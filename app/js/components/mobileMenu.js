export function setupMobileMenu() {
  const html = document.documentElement;
  const body = document.body;
  const menuBtn = document.querySelector('.menu-btn');
  const headerMobile = document.querySelector('.header__mobile');
  const header = document.querySelector('.header'); // добавляем основной header
  const anchors = document.querySelectorAll('a.mobile');

  menuBtn.addEventListener('click', () => {
    menuBtn.blur();
    html.classList.toggle('active');
    body.classList.toggle('modal-active');
    menuBtn.classList.toggle('active');
    headerMobile.classList.toggle('active');
  });

  function closeMenu() {
    html.classList.remove('active');
    body.classList.remove('modal-active');
    menuBtn.classList.remove('active');
    headerMobile.classList.remove('active');
  }

  function scrollToTarget(targetId) {
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      closeMenu();
      setTimeout(() => {
        const targetOffset = targetSection.offsetTop - 25;
        window.scrollTo({ top: targetOffset, behavior: 'smooth' });
      }, 700);
    }
  }

  function handleAnchorClick(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    const hrefParts = href.split('#');
    if (hrefParts.length === 2) {
      const targetId = '#' + hrefParts[1];
      scrollToTarget(targetId);
    }
  }

  for (const anchor of anchors) {
    anchor.addEventListener('click', handleAnchorClick);
    anchor.addEventListener('touchstart', handleAnchorClick, { passive: true });
  }

  // Закрытие меню при клике вне header/header__mobile
  document.addEventListener('click', (event) => {
    if (!header.contains(event.target) && !headerMobile.contains(event.target) && !menuBtn.contains(event.target)) {
      closeMenu();
    }
  });
}