# DOM-дерево, события мыши, поиск, изменение элементов, изменение классов и innerHTML элемента 

## Задача

1) Создать кнопку, которая удаляет все дочерние элементы из элемента с классом `.wrapper`.
2) Есть элемент с классом `.modal`. Изначально он скрыт. Необходимо сделать кнопку, которая добавляет класс `.open` элементу с классом `.modal`. Логику модального окна написать в файле **modal.js**.
3) Внутри элемента с классом `.modal` есть кнопка с крестиком. При нажатии на неё класс `.open` убирается у элемента с классом `.modal`.

## Материалы

1) [Документ](https://learn.javascript.ru/document).
    1) [DOM-дерево](https://learn.javascript.ru/dom-nodes).
    2) [Навигация по DOM-элементам](https://learn.javascript.ru/dom-navigation).
    3) [Поиск: getElement*, querySelector*](https://learn.javascript.ru/searching-elements-dom).
    4) [Изменение документа](https://learn.javascript.ru/modifying-document).
    5) [Стили и классы](https://learn.javascript.ru/styles-and-classes).
2) [Введение в события](https://learn.javascript.ru/events).
    1) [Введение в браузерные события](https://learn.javascript.ru/introduction-browser-events).
    2) [Основы событий мыши](https://learn.javascript.ru/mouse-events-basics).
    3) [Движение мыши: mouseover/out, mouseenter/leave](https://learn.javascript.ru/mousemove-mouseover-mouseout-mouseenter-mouseleave).

## В кратце

### DOM

DOM дерево - представление HTML документа в виде иерархической древовидной структуры (parent - child), где все HTML-теги - объекты, а вложенные теги и даже текст внутри элемента - "дети" (child) родительского элемента. Мы имеем доступ к объектам с помощью JavaScript.

#### Поиск элемента

Элементы `<head>` и `<body>` можно достать через точку.

```js
// Присваиваем значение элемента head переменной head
const head = document.head;
// Присваиваем значение элемента body переменной body
const body = document.body;
```

Чтобы найти другие элементы используем универсальные методы объекта `document`, такие как querySelector() для поиска одного элемента (если их несколько, то он вернёт самый первый встречающийся в документе) и querySelectorAll() для поиска всех элементов (возвращает объект класса NodeList, с которым можно работать как с обычным массивом).

Они используют css-селекторы для поиска.

```html
<div class="container">
  <h1 class=".red"></h1>
  <h1 class=".blue"></h1>
</div>
<div class="container">
  <h1 class=".red"></h1>
  <h2 class=".blue"></h2>
</div>
<div class="container">
  <h1 class=".red"></h1>
  <h2 class=".red"></h2>
</div>
<script>
  // Получаем все элементы с классом .container
  const containers = document.querySelectorAll('.container');
  // Получаем первый встречающийся элемент с классом .container
  const container = document.querySelector('.container');
  // Получаем все элементы с тегом h1
  const allH1 = document.querySelector('h1');
  // Получаем все элементы с тегом h2 и классом .red
  const redH2 = document.querySelector('h2.red');
  // Получаем все дочерние элементы элемента с классом .container
  const firstContainerChild = document.querySelectorAll('.container > *');
</script>
```

#### Изменение элемента

Присвоив значение элемента в переменную, можно изменять его свойства. Получить доступ к ним можно через точку.

```js
element.property
```

##### innerHTML

Отвечает за дочерние элементы, в т.ч. и текст. Хранит эти значения в виде строки. Можно изменять с помощью приравнивания к новому значению.

```html
<h1 id="test">Hello world!</h1>
<script>
  // Находим элемент
  const test = document.querySelector('#test');
  // Изменяем внутренние элементы. В данном случае просто текст.
  test.innerHTML = 'New text';
</script>
```

Если значение будет `null`, то это эквивалентно отсутствию каких-либо элементов внутри. Таким образом можно убрать все дочерние элементы.

```html
<div class="container">
  <h1>Test</h1>
  <h1>Test123</h1>
  <h1>Some text</h1>
</div>
<script>
  const container = document.querySelector('.container');
  // Обнуляем все дочерние элементы
  container.innerHTML = null;
</script>
```

##### classList

Можно изменять классы элемента. Для этого обратимся к свойству `classList`.

```html
<h1 class="red blue green headline test"></h1>
<script>
  const headline = document.querySelector('.headline');
  console.log(headline.classList)
  /* Почти то же, что и массив, но содержит доп. поля и методы
  ▾ DOMTokenList(5)
    0:"red"
    1:"blue"
    2:"green"
    3:"headline"
    4:"test"
    length:5
    value:"red blue green headline test"
    [[Prototype]]:DOMTokenList
  */
</script>
```

Можно добавлять, удалять, проверять наличие, переключать (удалять, если есть и наоборот) классы у элемента.

```html
<h1 class="red blue green headline test"></h1>
<script>
  const headline = document.querySelector('.headline');
  // Добавляем класс
  headline.classList.add('yellow');
  // Удаляем класс
  headline.classList.remove('yellow');
  // Переключаем класс. Так как он отсутствует, то он добавится
  headline.classList.toggle('yellow');
</script>
```

Есть и другие свойства элемента, такие как, например, `style`. Но в практике их не будет

#### Создание элемента

Можно создавать элементы и добавлять их в любое место DOM-дерева

```html
<div class="wrapper">
</div>
<script>
  const wrapper = document.querySelector('.wrapper');
  
  // Создаём заголовок
  const headline = document.createElement('h1');

  // Добавляем текст новому элементу
  headline.innerHTML = 'Hello world!!!';
  // Добавляем класс новому элементу
  headline.classList.add('red');

  // Вставляем элемент в контейнер
  wrapper.append(headline);
</script>
```

### Events. Браузерные события

Существуют различные браузерные события - клик, наведение мышью, нажатие клавиши клавиатуры и т.д.. У каждого элемента есть аттрибут для каждых событий.

```html
<!-- Назначил функцию someFunction() на событие клика на элемент -->
<div onclick="someFunction()"></div>
<script>
  function someFunction() {
    alert('Clicked!');
  }
</script>
```

Также, если найти элемент через js, то ему можно назначить обработчик через свойство с аналогичным аттрибуту названием или через метод `addEventListener()`. Ниже пример, где выполняется аналогичное действие.

```html
<div id="block"></div>
<script>
  const block = document.querySelector('#block');
  
  function someFunction() {
    alert('Clicked!');
  }

  // Через приравнивания значения свойства onclick
  block.onclick = () => {
    alert('Clicked!');
  }
  // С взаранее заданной функцией
  block.onclick = someFunction();
  
  // Через метод addEventListener()
  block.addEventListener('click', () => {
    alert('Clicked!');
  });
  // С взаранее заданной функцией
  block.addEventListener('click', someFunction());
</script>
```

#### Виды событий (из задания)

##### click

Клик(как на пк, так и со смартфона).

##### mouseenter

Активируется, когда курсор мыши наводится на элемент. Движения внутри элемента после наводки не считаются.

##### mouseleave

Активируется, когда курсор мыши, покидает пределы элемента.