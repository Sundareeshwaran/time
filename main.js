let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
  let Time = new Date();

  hrs.innerHTML = (Time.getHours() < 10 ? "0" : "") + Time.getHours();
  min.innerHTML = (Time.getMinutes() < 10 ? "0" : "") + Time.getMinutes();
  sec.innerHTML = (Time.getSeconds() < 10 ? "0" : "") + Time.getSeconds();
}, 1000);
