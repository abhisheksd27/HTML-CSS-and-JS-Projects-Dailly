const containerEl= document.querySelector(".container")



for (let index = 0; index < 30; index++) {
    
    const colorContainerEl = document.createElement("div")
    colorContainerEl.classList.add("color-container")


    containerEl.appendChild(colorContainerEl)


    
}

const colorContainerEls= document.querySelectorAll(".color-container")

generateColors()

function generateColors(){
    colorContainerEls.forEach((colorContainerEl) => {
        const randomColorCode = RandomColor()
        colorContainerEl.style.backgroundColor = "#" + randomColorCode
        colorContainerEl.innerHTML=`#${randomColorCode}`

    })
}


function RandomColor(){
    const chars= "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode="";

    for (let index = 0; index < colorCodeLength; index++) {
        const randomNumber= Math.floor(Math.random() *chars.length)
        // colorCode += chars.substring(randomNumber,randomNumber +1)
        colorCode +=chars[randomNumber]


    }
    return colorCode

}



