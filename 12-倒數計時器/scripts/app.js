// 程式碼寫這裡
// by pressing enter, the clock start the counddown
// by pressing space, the countdown pauses 
document.addEventListener("DOMContentLoaded",() => {
    document.addEventListener("keydown", (e) => {
        if (e.key ===  "Enter") {
            startCountDown();
        }
    })

    function startCountDown() {
        const curTime = document.querySelector(".timer").childNodes[0].nodeValue;
        
        let mins = Number(curTime.slice(0,2));
        let secs = Number(curTime.slice(3));
        const countDown = setInterval(() => {
            secs -= 1;
            if (secs < 0) {
                mins -= 1;
                secs = 59;
            }    
            if (mins < 0) {
                clearInterval(countDown);
            } else {
                document.querySelector(".timer").innerHTML = convert(mins) + ":" + convert(secs);
            }
        },1000);

        // stop the count if someone presses the space bar
        document.addEventListener("keydown", e => {
            if (e.key === " ") {
                clearInterval(countDown);
            }
        });
    }

    function convert(num) {
        return String(num).padStart(2,"0");
    }
})


