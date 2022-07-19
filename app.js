const comingDate = document.getElementById("comingDate");

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

//set current date plus 30 days
Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

const today = new Date();
let currentDay = today.addDays(30).getDate();
let currentMonth = today.addDays(30).getMonth();
let currentYear = today.addDays(30).getFullYear();
let monthsNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

comingDate.textContent = `${currentDay} ${monthsNames[currentMonth]} ${currentYear}`;

//countdown logic
let timeRemaining = 86400 - ((today.getHours() * 3600) + (today.getMinutes() * 60) + today.getSeconds());

days.textContent = 29;

const setTime = () => {
    let hoursRemaining = Math.floor(timeRemaining / 3600);
    let minutesRemaining = Math.floor(timeRemaining / 60) % 60;
    let secondsRemaining = timeRemaining - (hoursRemaining * 3600 + minutesRemaining * 60);
    hours.textContent = hoursRemaining;
    minutes.textContent = minutesRemaining;
    seconds.textContent = secondsRemaining;
    timeRemaining--;
}


setInterval(setTime, 1000);

//input menu box
const packBtn = document.getElementById("packBtn");
const menu = document.getElementById("menu");

packBtn.addEventListener("click", () => {
    packBtn.classList.toggle("turn-around");
    menu.classList.toggle("show--menu");
});


const options = document.querySelectorAll(".option");
const packLabel = document.getElementById("packLabel");
const pack = document.getElementById("pack");
const checklabels = document.querySelectorAll(".check");

options.forEach((option) => {
    option.addEventListener("click", () => {
        packLabel.textContent = option.querySelector(".option--name").textContent;
        pack.value = option.querySelector(".option--price").textContent;
        checklabels.forEach((check) => {
            check.classList.remove("show--check");
        });
        option.querySelector(".check").classList.add("show--check");
        packBtn.classList.toggle("turn-around");
        menu.classList.toggle("show--menu");
    });
});

//email validation
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const ico = document.getElementById("wrongIco");
const myForm = document.getElementById("myForm");

function handleFormSubmit(event) {
    event.preventDefault();
    const email = document.getElementById("e-mail");
    if (!email.value.match(regex)) {
        email.classList.add("wrong--mail");
        ico.classList.add("show--ico");
        ico.classList.remove("hide");
    } else {
        email.classList.remove("wrong--mail");
        ico.classList.remove("show--ico");
        ico.classList.add("hide");
    }
}

myForm.addEventListener("submit", handleFormSubmit);