const dateElement = document.querySelector("#date");
const randomElement = document.querySelector("#random");

dateElement.innerHTML = `date: ${new Date()}`
randomElement.innerHTML = `random number: ${Math.round(Math.random() * 6)}`
