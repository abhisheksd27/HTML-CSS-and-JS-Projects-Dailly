const hourEl = document.querySelector('#hours')
const minuteEl = document.querySelector('#minutes')
const secondEl = document.querySelector('#seconds')
const ampmEl = document.querySelector('#ampm')



function updateClock(){
    let date = new Date()
    let hours = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let ampm = "AM"

    if(hours> 12){
        hours = hours - 12
        ampm = "PM"
    }
    hours= hours<10 ? "0" + hours : hours
    m= m<10 ? "0" + m : m
    s= s<10 ? "0" + s : s

    hourEl.innerHTML=hours;
    minuteEl.innerHTML=m;
    secondEl.innerHTML=s;
    ampmEl.innerHTML=ampm;
    setTimeout(()=>{
        updateClock()
    },1000)

}

updateClock()


