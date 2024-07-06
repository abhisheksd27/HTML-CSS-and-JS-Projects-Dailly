const navbarEl= document.querySelector(".navbar")
const bottomContainerElement = document.querySelector(".bottom-container")


// console.log(bottomContainerElement.offsetTop)
// console.log(navbarEl.offsetHeight)
window.addEventListener("scroll",()=>{
    if(window.scrollY > bottomContainerElement.offsetTop-navbarEl.offsetHeight -50){
        navbarEl.classList.add("active")
    }else{
        navbarEl.classList.remove("active")
    }
})
