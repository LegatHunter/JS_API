// Задание 1 (тайминг 15 минут) Вам необходимо создать навигационное меню для веб-сайта, в котором меняется активный пункт при клике без фактического перехода на другие страницы. Меню должно обладать следующими характеристиками:
// 1. Подсветка активного пункта: При клике на пункт меню он должен становиться активным, и для активного пункта должен применяться определенный стиль (например, изменение цвета фона). Если выбрать другой пункт, предыдущий должен перестать быть активным.
// 2. Эффекты наведения: При наведении курсора на пункты меню должны применяться эффекты (например, изменение цвета текста или фона) для подсказки пользователю, что пункт меню является интерактивным.

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu__item");

menu.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("menu__item")) {
    event.preventDefault();
    menuItems.forEach((item) => {
      item.classList.remove("active");
      target.classList.add("active");
    });
  }
});



// Задание 2 (тайминг 15 минут) Создайте простое модальное окно, которое появляется при клике на кнопку "Открыть модальное окно" и закрывается при клике на кнопку "Закрыть". Модальное окно должно содержать заголовок "Модальное окно" и кнопку для закрытия. * Модальное окно должно плавно появляться и исчезать при открытии и закрытии.

const open = document.querySelector(".open");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

open.addEventListener("click", (e) => {
  modal.style.display = "block";
})

close.addEventListener("click", (e) => {
  modal.style.display = "none";
})


// У вас есть кнопка "Купить". Создайте скрипт, который при клике на эту кнопку меняет её текст на "Товар добавлен в корзину" в течение 2 секунд, а затем возвращает исходный текст "Купить". В обработчике события клика также проверьте, является ли событие доверенным. Если событие является доверенным, выполните изменение текста кнопки и убедитесь, что после 2 секунд текст возвращается в исходное состояние.


const button = document.querySelector(".buy");

button.addEventListener("click", (e) => {
  if (!e.isTrusted) {
    return;
  }
  button.textContent = "Товар добавлен в корзину";
  setTimeout(() => {
    button.textContent = "Купить";
  }, 2000);
})


// Задание 4 (тайминг 20 минут) Вам предоставляется задача создать простой онлайн опросник, который позволяет пользователям отвечать на вопросы с вариантами ответов. Ваша задача - разработать интерфейс и функциональность для этого опросника, используя HTML, CSS и JavaScript. 1. 2. 3. 4. 5. 6. Создайте интерфейс с несколькими вопросами и вариантами ответов. Каждый вопрос должен иметь несколько вариантов ответов. Реализуйте обработку событий, чтобы пользователи могли выбирать варианты ответов. Добавьте кнопку "Завершить опрос", которая будет показывать результаты опроса. При нажатии на кнопку "Завершить опрос", вы должны проверить, что пользователь ответил на все вопросы, и отобразить выбранные им варианты ответов. Если пользователь не ответил на все вопросы, покажите ему сообщение о необходимости ответить на все вопросы перед завершением опроса. По желанию можно добавить стилизацию опросника с использованием CSS для лучшего пользовательского опыта.

const btn = document.querySelector(".btn");

const form1 = document.querySelector(".form1");
const form2 = document.querySelector(".form2");
const form3 = document.querySelector(".form3");

const result1 = document.querySelector(".result1");
const result2 = document.querySelector(".result2");
const result3 = document.querySelector(".result3");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (form1.checkValidity() && form2.checkValidity() && form3.checkValidity()) {
    form1.reset();
    form2.reset();
    form3.reset();
  } else {
    alert("Пожалуйста, ответьте на все вопросы");
  }
});



form1.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  result1.textContent = formData.get("first");
  form1.reset();
});

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  result2.textContent = formData.get("second");
  form2.reset();
});

form3.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  result3.textContent = formData.get("third");
  form3.reset();
})

