
function triggerBurger(event) {
  const burger = document.querySelector('.burger');

  burger.classList.toggle('open');

  const image = event.currentTarget.querySelector('img');

  if (burger.classList.contains('open')) {
    image.src = 'public/images/icons/close.svg';
  } else {
    image.src = 'public/images/icons/menu.svg';
  }
}
