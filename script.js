let hrs = document.getElementById("hour")
let min = document.getElementById("minute")
let sec = document.getElementById("second")

srtInterval(()=>{

    let currentTime = new Date();
    
    hrs.innerHTML = currentTime.getHours();
    min.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();
},1000)