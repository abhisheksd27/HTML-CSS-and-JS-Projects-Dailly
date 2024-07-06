const textareaEl = document.getElementById("textarea")
const totalCountEl = document.getElementById("total-counter")
const remainingCountEl=document.getElementById("remaining-counter")



textareaEl.addEventListener("keyup",()=>{
    updateCounter()
})

function updateCounter(){
    totalCountEl.innerText =textareaEl.value.length

    remainingCountEl.innerText = textareaEl.getAttribute("maxlength")-textareaEl.value.length


}