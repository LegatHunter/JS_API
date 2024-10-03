// Задание 1 (тайминг 30 минут)
// Работа с BOM
// 1. Определение текущего размера окна браузера:
// ○ Напишите функцию, которая будет выводить текущую
// ширину и высоту окна браузера при его изменении.
// 2. Подтверждение закрытия страницы:
// ○ Создайте всплывающее окно или диалоговое окно,
// которое появляется при попытке закрыть вкладку
// браузера и спрашивает пользователя, уверен ли он в
// своем решении закрыть страницу.
// 3. Управление историей переходов:
// ○ Используйте объект history для управления историей
// переходов на веб-странице. Создайте кнопки "Назад" и
// "Вперед" для перемещения по истории.

const updateWindowSize = () => {
  const widthEl = window.innerWidth;
  const heightEl = window.innerHeight;
  const windowSizeElement = document.querySelectorAll(".width-size");

  width.textContent = widthEl;
  height.textContent = heightEl;
};

window.addEventListener("load", updateWindowSize);
window.addEventListener("resize", updateWindowSize);

// window.addEventListener('beforeunload', (e) => {
//   e.preventDefault();
//   e.returnValue = true;
// })

goBack.addEventListener("click", () => {
  history.back();
});
goForward.addEventListener("click", () => {
  history.forward();
});

// Задание 2 (тайминг 30 минут)
// Вы должны создать веб-страницу, которая позволяет пользователю динамически
// управлять элементами на странице. Ниже приведены основные требования и
// функциональность:
// 1. На странице должны быть кнопки "Добавить элемент", "Удалить элемент" и
// "Клонировать элемент".
// 2. При нажатии на кнопку "Добавить элемент" на страницу добавляется новый
// квадратный элемент (<div>) с размерами 100x100 пикселей. Этот элемент
// должен иметь класс .box и содержать текст, указывающий порядковый номер
// элемента (1, 2, 3 и так далее).
// 3. При нажатии на кнопку "Удалить элемент" удаляется последний добавленный
// элемент, если таковой имеется.
// 4. При нажатии на кнопку "Клонировать элемент" создается копия последнего
// добавленного элемента и добавляется на страницу.
// 5. Все элементы имеют класс .box и стилизованы с помощью CSS (см. пример).
// 6. Элементы могут быть добавлены, удалены и клонированы в любом порядке и в
// любом количестве.

// const container = document.querySelector('#container');
// const addButton = document.querySelector('#addButton');
// const deleteButton = document.querySelector('#deleteButton');
// const cloneButton = document.querySelector('#cloneButton');

addButton.addEventListener("click", () => {
  const box = document.createElement("div");
  box.classList.add("box");
  box.textContent = container.children.length + 1;
  container.append(box);
});

deleteButton.addEventListener("click", () => {
  container.lastElementChild.remove();
});

cloneButton.addEventListener("click", () => {
  const box = container.lastElementChild.cloneNode(true);
  container.append(box);
});

// Задание 3 (тайминг 50 минут)
// 1. Вы создаете веб-страницу для отображения списка статей. Каждая статья состоит из заголовка и
// текста. Вам необходимо использовать Bootstrap для стилизации элементов.
// 2. Используйте Bootstrap, чтобы стилизовать элементы:
// a. Заголовок статьи (<h2>)
// b. Текст статьи (<p>)
// c. Кнопки "Добавить статью", "Удалить" и "Редактировать".
// 3. Создайте начальный список статей, который будет загружаться при загрузке страницы. Используйте
// JSON-данные для определения заголовков и текстов статей.
// 4. Позвольте пользователю добавлять новые статьи. При нажатии на кнопку "Добавить статью" должна
// появиться новая статья с заголовком "Новая статья" и текстом "Введите содержание статьи...".
// 5. Реализуйте функциональность удаления статей. При нажатии на кнопку "Удалить" соответствующая
// статья должна быть удалена из списка.
// 6. Реализуйте функциональность редактирования статей. При нажатии на кнопку "Редактировать"
// пользователь должен иметь возможность изменить заголовок и текст статьи. Используйте
// всплывающее окно или prompt для ввода новых данных.
// 7. Все изменения (добавление, удаление, редактирование) должны быть сохранены в локальное
// хранилище браузера, чтобы они сохранялись после перезагрузки страницы.

const articlesData = [
  {
    title: "Заголовок статьи 1",
    text: "Текст статьи 1",
  },
  {
    title: "Заголовок статьи 2",
    text: "Текст статьи 2",
  },
  {
    title: "Заголовок статьи 3",
    text: "Текст статьи 3",
  },
];

articlesData.forEach((element) => {
  const articleItem = createArticle(element.title, element.text);
  articleList.append(articleItem);
});

function createArticle(title, content) {
  const articleItem = document.createElement("li");
  articleItem.classList.add("list-group-item");

  const articleTitle = document.createElement("h2");
  articleTitle.classList.add("mb-3");
  articleTitle.textContent = title;

  const articleContent = document.createElement("p");
  articleContent.textContent = content;

  const editButton = document.createElement("button");
  editButton.classList.add("btn", "btn-warning");
  editButton.textContent = "Редактировать";

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-danger");
  deleteButton.textContent = "Удалить";

  articleItem.append(articleTitle, articleContent, editButton, deleteButton);

  return articleItem;
}

addArticleButton.addEventListener("click", () => {
  const NewArticle = {
    title: "Новая статья",
    text: "Новый текст статьи",
  };

  const articleItem = createArticle(NewArticle.title, NewArticle.text);
  articleList.append(articleItem);
});

articleList.addEventListener("click", function (e) {
  if (e.target.textContent === "Удалить") {
    const articleItem = e.target.closest("li");
    articleItem.remove();
  }
  if (e.target.textContent === "Редактировать") {
    const articleItem = e.target.closest("li");
    const articleTitle = articleItem.querySelector("h2");
    const articleContent = articleItem.querySelector("p");
    const newTitle = prompt("Новый заголовок статьи", articleTitle.textContent);
    const newContent = prompt("Новый текст статьи", articleContent.textContent);
    if (newTitle !== null && newContent !== null) {
      articleTitle.textContent = newTitle;
      articleContent.textContent = newContent;
    }
  }
});