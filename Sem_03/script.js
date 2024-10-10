// Задание 1 (тайминг 35 минут)
// Вы разрабатываете интернет-магазин и хотите добавить
// функциональность динамического фильтрации товаров по
// категориям. У вас есть форма с выпадающим списком (select), в
// котором пользователь может выбрать категорию товаров. При выборе
// категории товаров, необходимо динамически обновлять список
// отображаемых товаров на странице, чтобы пользователь видел
// только товары из выбранной категории.
// 1. Создайте интерфейс веб-страницы, который включает в себя
// следующие элементы:
// a. Выпадающий список (select) с категориями товаров.
// b. Список товаров, который будет отображать товары в
// соответствии с выбранной категорией.
// c. Каждый товар в списке должен содержать название и
// категорию.
// 2. Используйте HTML для создания элементов интерфейса.
// Задание 1 (продолжение)
// 1. Используйте JavaScript для обработки событий:
// ○ При выборе категории товаров в выпадающем списке, форма
// должна следить за изменениями.
// ○ Динамически обновите список товаров на странице, чтобы
// отображать только товары из выбранной категории.
// 2. Создайте объекты товаров и их категорий для имитации данных магазина.
// 3. Стилизуйте элементы интерфейса с помощью CSS для улучшения
// внешнего вида.

const tovars = [{
  id: 1,
  name: 'iPhone',
  category: 'phone'
}, {
  id: 2,
  name: 'Samsung galaxy',
  category: 'phone'
}, {
  id: 3,
  name: 'Xiaomi',
  category: 'phone'
}, {
  id: 4,
  name: 'LG',
  category: 'TV'
}, {
  id: 5,
  name: 'Sony',
  category: 'TV'
}, {
  id: 6,
  name: 'Samsung',
  category: 'TV'
}, {
  id: 7,
  name: 'Asus',
  category: 'laptop'
}, {
  id: 8,
  name: 'HP',
  category: 'laptop'
}, {
  id: 9,
  name: 'Dell',
  category: 'laptop'
}
]

const select = document.querySelector('.tovar')
const ul = document.querySelector('.list')

function displayProd (category) {
  ul.innerHTML = ''
  tovars.forEach((tovar) => {
    if (tovar.category === category || category === '') {
      const li = document.createElement('li')
      li.textContent = tovar.name
      ul.append(li)
    }
  })
}

const categorySelect = document.querySelector('#categorySelect')
categorySelect.addEventListener('change', () => {
  displayProd(categorySelect.value)
})

displayProd('')


let page = 1
async function fetchPhotos () {
  try {
    const response = await fetch(`https://api.unsplash.com/photos?page=${page}&per_page=9&client_id=617rSueCkvkaPB1_lKWjcI1xKpV-Vw_4rHLpAsmSOlw`);
    const photos = await response.json();
    return photos;
  } catch (error) {
    console.log(error);
    return []
  }
}

async function renderPhotos () {
  const photos = await fetchPhotos();
  const photoContainer = document.querySelector('#photoContainer');
  photoContainer.innerHTML = '';
  photos.forEach((photo) => {
    const photoElement = document.createElement('div');
    photoElement.classList.add('photo');
    const img = document.createElement('img');
    img.src = photo.urls.small;
    img.alt = photo.alt_description;
    photoElement.appendChild(img);
    photoContainer.appendChild(photoElement);
  });
  page++;
}

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    renderPhotos();
  }
})
renderPhotos();
// Задание 2. Бесконечная лента фотографий
// Для создания бесконечной ленты с фотографиями с использованием Unsplash API, выполните следующие
// шаги:
// 1. Зарегистрируйтесь на Unsplash:
// ○ Перейдите на веб-сайт Unsplash (https://unsplash.com/).
// ○ Нажмите кнопку "Join" или "Регистрация", чтобы создать аккаунт, если у вас его еще нет.
// ○ Войдите в свой аккаунт Unsplash.
// 2. Создайте приложение:
// ○ После входа в аккаунт Unsplash, перейдите на страницу разработчика Unsplash
// (https://unsplash.com/developers).
// ○ Нажмите "New Application" (Новое приложение).
// ○ Заполните информацию о вашем приложении, такую как имя, описание и сайт (вы можете
// использовать http://localhost для тестового сайта).
// ○ После заполнения информации, нажмите "Create Application" (Создать приложение).
// Задание 2 (продолжение)
// 3. Получите API-ключ:
// ○ После создания приложения, вы получите API-ключ. Этот ключ будет
// отображаться в вашей панели управления приложением.
// ○ API-ключ представляет собой строку вида YOUR_ACCESS_KEY.
// Скопируйте его.
// 4. Измените код HTML и JavaScript:
// ○ Откройте вашу HTML-страницу в текстовом редакторе или
// интегрированной среде разработки.
// ○ Замените 'YOUR_ACCESS_KEY' в коде JavaScript на ваш собственный
// API-ключ.
// Задание 2 (продолжение)
// Создайте HTML-страницу со следующей
// структурой:
// Задание 2 (продолжение)
// Теперь давайте напишем JavaScript-код
// для загрузки фотографий из Unsplash API
// и отображения их на странице.
// Вставьте следующий код внутри блока
// <script></script> в вашем HTMLфайле:
// Задание 2. Бесконечная лента фотографий
// (тайминг 55 минут)
// Реализуйте бесконечную ленту с фотографиями.





// Задание 3 (тайминг 30 минут)
// 1. Создайте HTML-файл с простой веб-страницей, содержащей заголовок
// "Список пользователей" и пустой список для отображения пользователей.
// 2. Напишите JavaScript-код для выполнения следующих шагов:
// a. Создайте функцию fetchUserList(), которая будет выполнять GETзапрос к "https://jsonplaceholder.typicode.com/users" для получения
// списка пользователей. В случае ошибки запроса, функция должна
// обработать ошибку и вернуть пустой массив.
// b. Создайте обработчик события "load" на объекте window, чтобы
// выполнить запрос к API при загрузке страницы.
// c. Внутри обработчика события "load", вызовите функцию
// fetchUserList() для получения списка пользователей.
// d. Создайте элементы списка (например, элементы <li>) для каждого
// пользователя в полученном списке.
// e. Добавьте созданные элементы в список пользователей на вебстранице.
