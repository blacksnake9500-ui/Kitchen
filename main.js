console.log("Salohiddin");

let log = document.getElementById("log");
let form = document.getElementById("form");

log.addEventListener("click", (event) => {
  if (form.style.display === "none" || form.style.display === "") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }

  event.stopPropagation();
});

window.addEventListener("click", (event) => {
  if (event.target !== form && !form.contains(event.target)) {
    form.style.display = "none";
  }
});
