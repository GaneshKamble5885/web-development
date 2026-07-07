let input = document.querySelector("input");
input.style.backgroundColor="black";
input.style.color="white";
input.style.fontSize="30px";
input.style.textAlign="center";

let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");
let seconds = 0;
let timer = null;
function showtime() {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let sec = seconds % 60;
    input.value = `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}


start.addEventListener("click", () =>{
    if (timer === null) {
        timer = setInterval(() => {
            seconds++;
            showtime();
        }, 1000);
    }

});


stop.addEventListener("click",() => {
    clearInterval(timer);
    timer = null;
});

reset.addEventListener("click",() => {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    showtime();
});
