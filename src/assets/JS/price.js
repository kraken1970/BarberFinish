
let linkSearchMap2 = document.querySelector(".search-map2");
let map = document.querySelector(".modal-content-map");
let closeMap = map.querySelector(".modal-content-close");


linkSearchMap2.addEventListener("click", (event) => {
  event.preventDefault();
  map.classList.add("modal-map-show");
});

closeMap.addEventListener("click", (event) => {
  event.preventDefault();
  map.classList.remove("modal-map-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (map.classList.contains("modal-map-show")) {
    map.classList.remove("modal-map-show");
    }
  }
});