function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();
// ex 01

function addDays() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  const days = document.getElementById("days");

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const day = dezDaysList[index];
    const dayItem = document.createElement("li");
    dayItem.innerHTML = day;
    if (day === 24 || day === 25 || day === 31) {
      dayItem.className = "day holiday";
    } else if (day === 4 || day === 11 || day === 18 || day === 25) {
      dayItem.className = "day friday";
    } else {
      dayItem.className = "day";
    }

    days.appendChild(dayItem);
  }
}

addDays();

// ex 02

function algo(name) {
  const dia = name;
  const btnPai = document.querySelector(".buttons-container");
  const btn = document.createElement("button");
  btn.innerText = dia;
  btn.setAttribute("id", "btn-holiday");
  btnPai.appendChild(btn);
}

algo("Feriados");

// ex 03

let selectBtn = document.getElementById("btn-holiday");
function handleColor() {
  const selectHoliday = document.getElementsByClassName("holiday");

  for (let index = 0; index < selectHoliday.length; index += 1) {
    if (selectHoliday[index].style.backgroundColor === "rgb(0, 184, 230)") {
      selectHoliday[index].style.backgroundColor = "rgb(238,238,238)";
    } else {
      selectHoliday[index].style.backgroundColor = "rgb(0, 184, 230)";
    }
  }
}

selectBtn.addEventListener("click", handleColor);

// ex 04

function fds(dia) {
  const day = dia;
  const btnContainer = document.querySelector(".buttons-container");
  const btnSexta = document.createElement("button");
  btnSexta.innerText = day;
  btnSexta.setAttribute("id", "btn-friday");
  btnContainer.appendChild(btnSexta);
}

fds("Sexta-feira");

// ex 05

let selectSexta = document.getElementById("btn-friday");
function handleText() {
  const selectFriday = document.getElementsByClassName("friday");

  for (let index = 0; index < selectFriday.length; index += 1) {
    if (selectFriday[index].innerHTML !== "Sextou") {
      selectFriday[index].innerHTML = "Sextou";
    } else {
      selectFriday[index].innerHTML = selectFriday[index];
    }
  }
}

selectSexta.addEventListener("click", handleText);
