const apikey = "c9ea4659677c1a75ab8c5a02088e751d";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchicon = document.querySelector(".search button");
let city = document.querySelector("#city");
async function checkweather() {

    let response = await fetch(apiurl + city.value + `&appid=${apikey}`);

    if (response.status == 404) {
        alert("city not found");
        return;
    }

    const data = await response.json();
    document.querySelector("#city-temp").innerHTML =
        Math.round(data.main.temp) + "&deg;c";
    document.querySelector("#city-name").innerHTML =
        data.name;
    document.querySelector("#humidity-value").innerHTML =
        data.main.humidity + "%";
    document.querySelector("#wind-value").innerHTML =
        data.wind.speed + "km/h";



}


searchicon.addEventListener("click", function () {
    checkweather();
})

city.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        checkweather();
    }
});