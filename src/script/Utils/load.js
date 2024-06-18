let mask = document.querySelector('.mask');
let body = document.querySelector('.body');

window.addEventListener('load', () => {
  mask.classList.add('hide');
  setTimeout(() => {
    mask.remove();
    body.style.overflow = "visible"
  }, 100);
})