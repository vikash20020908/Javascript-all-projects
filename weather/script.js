const apik = "6fe5b760ed1459e38f812b48a29d17f0";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_icon");
async function checkweather (city) {
    const response = await fetch(apiurl + city +`&appid=${apik}`);

    if(response.status ==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        let data = await response.json();

        console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
            
        if (data.weather[0].main == "Clouds"){
            weatherIcon.src = "cloudy.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "clear.png";
        } 
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "rain.png";
        } 
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "dezzi.png";
        } 
        else  if(data.weather[0].main == "Mist"){
            weatherIcon.src = "mist.png";
        } 
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
})

