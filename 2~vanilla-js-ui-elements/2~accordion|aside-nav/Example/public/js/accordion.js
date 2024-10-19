const userData = [
  {
    title: 'Preferences',
    content: `
    <div class="user-info__item">
      <p class="user-info__item__title">Attitude to smoking</p>
      <p class="user-info__item__value">Negative</p>
    </div>
    <div class="user-info__item">
      <p class="user-info__item__title">Attitude to alcohol</p>
      <p class="user-info__item__value">Negative</p>
    </div>
    <div class="user-info__item">
      <p class="user-info__item__title">Attitude to Telegram Stars</p>
      <p class="user-info__item__value">Positive</p>
    </div>
    `
  },
  {
    title: 'Hobbies',
    content: `
      <p class="user-info__item__title">Swimming</p>
      <p class="user-info__item__title">Drawing</p>
    `
  },
];

function Accordion(data, element) {
  data.map(item => {
    const accordionElement = document.createElement('div');
    accordionElement.classList.add('accordion');
    accordionElement.innerHTML = `
    <button class="accordion__trigger transparent" onclick="triggerAccordion(event)">
      <p>${item.title}</p>
      <img src="./public/images/icons/add.svg" alt="add" class="accordion__trigger__icon">
    </button>
    <div class="accordion__container">
      <div class="accordion__content">
        ${item.content}
      </div>
    </div>
    `
    element.append(accordionElement);
  });
}

try {
  Accordion(userData, document.querySelector('#user-info'));
} catch (error) {
  console.log(error);
}

function triggerAccordion(event) {
  const accordionTriggerElement = event.currentTarget;
  const accordionElement = accordionTriggerElement.parentElement;
  const accordionContainerElement = accordionElement.querySelector('.accordion__container');

  if (accordionElement.classList.contains('open')) {
    accordionContainerElement.style.maxHeight = '';
  } else {
    accordionContainerElement.style.maxHeight = accordionContainerElement.scrollHeight + 'px';
  }

  accordionElement.classList.toggle('open');

  accordionTriggerElement.classList.toggle('selected');
}