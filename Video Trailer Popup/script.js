const btnEl = document.querySelector(".btn")
const closeIconEl=  document.querySelector(".close-icon")
const TrailerContainerEl = document.querySelector(".trailer-container")
const videoEl = document.querySelector("video")

btnEl.addEventListener("click", () => {
  TrailerContainerEl.classList.remove("active")
})

closeIconEl.addEventListener("click", () => {
  TrailerContainerEl.classList.add("active")
  videoEl.pause();
  videoEl.currentTime=0;

})