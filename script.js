// api = https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// api key = 3125262c3dbd4a013fa5ce5410bb1eeb

const API_key = "3125262c3dbd4a013fa5ce5410bb1eeb"

function getWeather(){
   
    const input = document.getElementById("txtinput");
    const cityName =input.value;
    // console.log(cityName);
    

     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`)
     .then(response=> response.json())
     .then(data=>{
       const humidity = (data.main.humidity+'%');
       const humid = document.querySelector(".humid");
       humid.innerHTML=humidity;
       const wind = (data.wind.speed+'Km/h')
       const speed = document.querySelector(".wind");
       speed.innerHTML=wind;
       const temperature = (Math.round(data.main.temp - 273.15 )+'°C');
       const temp = document.querySelector("#temp h1");
     temp.innerHTML = temperature;
     
   
   
     })
     .catch(err => console.error('ERROR', err));
   
     const city = document.querySelector("h3");
     city.innerHTML = cityName;
     

   
   
}
getWeather();


