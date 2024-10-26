# setInterval(), localstorage, IntersectionObserverApi

> **❗ Внимание:** Я называю компоненты из проекта из папки `Example` псевдо-компонентами, так как использование именно такой реализации компонентов не используется на практике, не удобно и сложно реализуемо на более крупных проектах. Здесь это показано лишь в качестве примера.

## Задача

1) В папке `Example` есть пример реализации домашней страницы с реагированием intersectionObserver при пересечении границы блока с классом `.faq` на 30% (.3 от размера блока) и модальное окно с отсчётом в кнопке до момента, пока она не станет доступна для пользователю для клика. Также там присутствует добавление элемента в localstorage для хранения значения (показывалось ли модальное окно раннее).
2) Сделайте похожую главную страницу с надоедливым модальным окном. Используйте intersectionObserver и localstorage для тех же целей, что и в примере.

## Материалы

1) [intersectionObserverApi](https://developer.mozilla.org/ru-RU/docs/Web/API/Intersection_Observer_API).
2) [setInterval](https://developer.mozilla.org/ru-RU/docs/Web/API/Window/setInterval).
3) [localstorage](https://developer.mozilla.org/ru-RU/docs/Web/API/Window/localStorage).
