const weather=document.querySelector(".js-weather")
const API_KEY="2fd1201bccc31765e62bd3af9b0eea2a";
const COORDS='coords';
function getWeather(lat,lng){
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
).then(function(Response){
  return Response.json();
}).then(function(Json){
  const temperature = Json.main.temp;
  const place= Json.name;
  weather.innerText=`temperature:${temperature}℃
   place:${place}`
});

}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
const latitude=position.coords.latitude;
const longitude= position.coords.longitude;
const coordsObj={
  latitude,
  longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude,longitude);
}
function handleGeoError(){
  console.log("can' t access geo location");
}


function askforCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}
function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords===null) {}
    askforCoords();
  }else {
    const parsedCoords= JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude,parsedCoords.longitude);
  }
}

function init(){
loadCoords();
}
init();
