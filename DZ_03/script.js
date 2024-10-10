// Урок 3. Сетевые запросы
// Цель: Разработать веб-приложение, которое каждый день будет отображать новое случайное изображение из коллекции Unsplash, давая пользователю возможность узнать больше о фотографе и сделать "лайк" изображению.

// Разработка веб-приложения:

// • Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк" и счетчик лайков.
// • Используя JavaScript и ваш API-ключ, получите случайное изображение из Unsplash каждый раз, когда пользователь загружает страницу.
// • Отобразите информацию о фотографе под изображением.
// • Реализуйте функционал "лайка". Каждый раз, когда пользователь нажимает кнопку "лайк", счетчик должен увеличиваться на единицу.

// * Дополнительные задачи (по желанию):

// • Добавьте функцию сохранения количества лайков в локальное хранилище, чтобы при новой загрузке страницы счетчик не сбрасывался.
// • Реализуйте возможность просмотра предыдущих "фото дня" с сохранением их в истории просмотров.

const likeButton = document.querySelector(".like");
const likeSpan = document.querySelector(".likes");
const nameP = document.querySelector(".name");
const photo = document.querySelector(".photo");
let countLikes = 0;

async function fetchPhoto() {
  try {
    const response = await fetch(
      'https://api.unsplash.com/photos/random/?client_id=617rSueCkvkaPB1_lKWjcI1xKpV-Vw_4rHLpAsmSOlw'
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function renderPhotos() {
  const data = await fetchPhoto();
  photo.src = data.urls.small;
  nameP.textContent = `Ник фотографа: ${data.user.username}`;
}
renderPhotos();


if (localStorage.key("countLikes")) {
  countLikes = localStorage.getItem("countLikes");
  likeSpan.textContent = countLikes;
} else {
  likeSpan.textContent = countLikes;
}

likeButton.addEventListener("click", () => {
  countLikes++;
  document.querySelector(".likes").textContent = countLikes;
  localStorage.setItem("countLikes", countLikes);
});

function savePhotoToHistory(data) {
  let history = JSON.parse(localStorage.getItem('photoHistory')) || [];
  history.push({
    url: data.urls.small,
    photographer: data.user.username,
    description: data.alt_description,
    id: data.id
  });
  localStorage.setItem('photoHistory', JSON.stringify(history));
}

savePhotoToHistory(data)

// Нормально не протестировать. Пишет превышен лимит