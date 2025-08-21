const slide = document.querySelector(".logos-slide");
const imgs = Array.from(slide.children);

imgs.forEach(img => slide.appendChild(img.cloneNode(true)));

let pos = 0;
function animate() {
  pos -= 1.7;
  if (pos <= -slide.scrollWidth / 2) pos = 0;
  slide.style.transform = `translateX(${pos}px)`;
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);