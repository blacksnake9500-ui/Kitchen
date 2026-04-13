let log = document.getElementById("log");
let form = document.getElementById("form");
let body = document.getElementById("body");

log.addEventListener("click", (event) => {
  if (form.style.display === "none" || form.style.display === "") {
    form.style.display = "block";
    body.style.zIndex = "-1";
    form.style.zIndex = "100";
  } else {
    form.style.display = "none";
  }

  event.stopPropagation();
});

let x = document.getElementById("x");

x.addEventListener("click", () => {
  if (form.style.display === "none" || form.style.display === "") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
});

window.addEventListener("click", (event) => {
  if (event.target !== form && !form.contains(event.target)) {
    form.style.display = "none";
  }
});

let btnosh = document.getElementById("btnosh");
let osh = document.getElementById("osh");

btnosh.addEventListener("click", () => {
  if (osh.style.display === "none") {
    osh.style.display = "block";
  } else {
    osh.style.display = "none";
  }
});

btnosh.addEventListener("click", () => {
  if (btnosh.textContent === "SALAT") {
    btnosh.textContent = "OSH";
  } else {
    btnosh.textContent = "SALAT";
  }
});

let s4btn = document.querySelector(".s4btn");
let circles = document.querySelectorAll(".circle");

s4btn.addEventListener("click", () => {
  circles.forEach((circle) => {
    if (circle.classList.contains("aylana")) {
      circle.classList.remove("aylana");
      s4btn.textContent = "Harakatlantirish";
    } else {
      circle.classList.add("aylana");
      s4btn.textContent = "to'xtatish";
    }
  });
});
