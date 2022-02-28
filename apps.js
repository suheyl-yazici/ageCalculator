const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const countdown = document.querySelector("#countdown");
const loading = document.querySelector(".loading");

window.addEventListener("load", ()=> {
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