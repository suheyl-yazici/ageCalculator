const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const countdown = document.querySelector("#countdown");
const loading = document.querySelector(".loading");

window.addEventListener("load", () => {
  loading.style.display = "block";
  setTimeout(() => {
    loading.style.display = "none";
    countdown.style.display = "flex";
  }, 1000);

  let h2elements = countdown.querySelectorAll("h2");
  h2elements.forEach((element) => {
    element.innerHTML = "00";
  });
});

let selectedBirthday;
let birthdayInput = document.querySelector("input[name=birthday]");
birthdayInput.addEventListener("change", (e) => {
  selectedBirthday = new Date(e.target.value);
  if (selectedBirthday > new Date()) {
    alert("Doğum tarihiniz bugünden büyük olamaz!!");
    return;
  }

  document.body.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80')";

  loading.style.display = "block";
  setInterval(updateCountdown, 1000);
  setTimeout(() => {
    loading.style.display = "none";
  }, 1000);
});

const updateCountdown = () => {
  let dobYear = selectedBirthday.getFullYear();
  let dobMonth = selectedBirthday.getMonth();
  let dobDay = selectedBirthday.getDay();
  let dobHour = selectedBirthday.getHours();
  let dobMinute = selectedBirthday.getMinutes();
  let dobSecond = selectedBirthday.getSeconds();

  let now = new Date();

  let currentYear = now.getFullYear();
  let currentMonth = now.getMonth();
  let currentDay = now.getDay();
  let currentHour = now.getHours();
  let currentMinute = now.getMinutes();
  let currentSecond = now.getSeconds();

  let yearOfAge = currentYear - dobYear;
  let monthOfAge = currentMonth - dobMonth;
  let dayOfAge = currentDay - dobDay;
  let hourOfAge = currentHour - dobHour;
  let minuteOfAge = currentMinute - dobMinute;
  let secondOfAge = currentSecond - dobSecond;

  if (secondOfAge < 0) {
    secondOfAge += 60;
    minuteOfAge--;
  }
  if (minuteOfAge < 0) {
    minuteOfAge += 60;
    hourOfAge--;
  }
  if (hourOfAge < 0) {
    hourOfAge += 24;
    dayOfAge--;
  }
  if (dayOfAge < 0) {
    dayOfAge += 30;
    monthOfAge--;
  }
  if (monthOfAge < 0) {
    monthOfAge += 12;
    yearOfAge--;
  }

  // Add values to DOM
  years.innerHTML = yearOfAge.toString().padStart(2, "0");
  months.innerHTML = monthOfAge.toString().padStart(2, "0");
  days.innerHTML = dayOfAge.toString().padStart(2, "0");
  hours.innerHTML = hourOfAge.toString().padStart(2, "0");
  minutes.innerHTML = minuteOfAge.toString().padStart(2, "0");
  seconds.innerHTML = secondOfAge.toString().padStart(2, "0");
};
