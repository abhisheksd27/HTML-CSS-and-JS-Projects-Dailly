const containerEl= document.querySelector(".container")
const joinbtnEl = document.querySelector(".btn")
const popupContainerEl = document.querySelector(".popup-container")
const exitIconEl= document.querySelector(".close-icon")
const inputEl = document.querySelector(".input")

joinbtnEl.addEventListener("click", () => {
  containerEl.classList.add("active")
  popupContainerEl.classList.remove("active")

});

exitIconEl.addEventListener("click", () => {
  containerEl.classList.remove("active")
  popupContainerEl.classList.add("active")
});

