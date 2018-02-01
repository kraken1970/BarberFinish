let linkPopup = document.querySelector(".login");
let popup = document.querySelector(".modal-content");
let closePopup = popup.querySelector(".modal-content-close");
let form = popup.querySelector("form");
let login = form.querySelector(".icon-user");
let password = form.querySelector(".icon-password");
let storage = localStorage.getItem("login");
let overlay  = document.querySelector(".modal-overlay");

linkPopup.addEventListener("click", (event) => {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  overlay.classList.add("modal-overlay-show");
  if (storage) {
    login.value = storage;
    password.focus();
    } else {
    login.focus();
  }
});

closePopup.addEventListener("click", (event) => {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("modal-overlay-show");
});

form.addEventListener("submit", function(event) {
  if (!login.value || !password.value) {
    event.preventDefault();
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("modal-overlay-show");
    }
  }
});


let linkSearchMap = document.querySelector(".search-map");
let linkSearchMap2 = document.querySelector(".search-map2");
let map = document.querySelector(".modal-content-map");
let closeMap = map.querySelector(".modal-content-close");

linkSearchMap.addEventListener("click", (event) => {
  event.preventDefault();
  map.classList.add("modal-map-show");
  overlay.classList.add("modal-overlay-show");
});

linkSearchMap2.addEventListener("click", (event) => {
  event.preventDefault();
  map.classList.add("modal-map-show");
  overlay.classList.add("modal-overlay-show");
});

closeMap.addEventListener("click", (event) => {
  event.preventDefault();
  map.classList.remove("modal-map-show");
  overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (map.classList.contains("modal-map-show")) {
    map.classList.remove("modal-map-show");
    overlay.classList.remove("modal-overlay-show");
    }
  }
});
