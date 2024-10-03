const data = [
  {
    title: "Общая",
    time: "09:00",
    maxPart: 10,
    currentPart: 5
  },
  {
    title: "ММА",
    time: "11:00",
    maxPart: 30,
    currentPart: 30
  },
  {
    title: "Бокс",
    time: "14:00",
    maxPart: 6,
    currentPart: 5
  },
];

const dataContainer = document.getElementById('trenya');

function renderData() {
  dataContainer.innerHTML = '';
  data.forEach((session, index) => {
    const card = document.createElement('div');
    card.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-4');

    const cardInner = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${session.title}</h5>
          <p class="card-text">Время: ${session.time}</p>
          <p class="card-text">Записано: ${session.currentPart}/${session.maxPart}</p>
          <button class="btn btn-primary ${session.currentPart >= session.maxPart ? 'disabled' : ''}" onclick="enroll(${index})">
            Записаться
          </button>
          <button class="btn btn-secondary ${session.currentPart === 0 ? 'disabled' : ''}" onclick="cancel(${index})">
            Отменить запись
          </button>
        </div>
      </div>
    `;

    card.innerHTML = cardInner;
    dataContainer.appendChild(card);
  });
}

function enroll(index) {
  if (data[index].currentPart < data[index].maxPart) {
    data[index].currentPart++;
    renderData();
  }
}

function cancel(index) {
  if (data[index].currentPart > 0) {
    data[index].currentPart--;
    renderData();
  }
}

renderData();
