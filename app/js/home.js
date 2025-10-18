function createInfiniteSlider(selector, speed = 1.7) {
  const slide = document.querySelector(selector);
  if (!slide) return console.warn(`Элемент ${selector} не найден`);

  const imgs = Array.from(slide.children);
  imgs.forEach(img => slide.appendChild(img.cloneNode(true)));

  let pos = 0;

  function animate() {
    pos -= speed;
    if (pos <= -slide.scrollWidth / 2) pos = 0;
    slide.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

createInfiniteSlider('.logos-slide', 1.3);

if (window.innerWidth < 600) {
  createInfiniteSlider('.benefits__list', 1);
}