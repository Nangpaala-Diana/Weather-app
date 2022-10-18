const cityName=document.querySelector('#city-name');
const temperature=document.querySelector('.temperature');
const windSpeed=document.querySelector('.wind');
const skyCondition=document.querySelector('.sky-condition');
const form=document.querySelector('#form-container');

//fetching the weather data from the API
form.addEventListener('submit',(e) => {
    e.preventDefault();
  let city= form.cityname.value
  cityName.textContent=city
  const API_KEY="3045dd712ffe6e702e3245525ac7fa38";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  )
  .then((response) => response.json())
  .then((data) =>{
    temperature.innerHTML+= `<p>${Math.round(data.main.temp-273)}&deg;C</p>`;
    windSpeed.innerHTML+= `<p>${data.wind.speed}</p>`;
    skyCondition.innerHTML+=`<p>${data.weather[0].description}</p>`;
  })
  .catch((err)=>{
    alert("please enter a valid city name");
  });
});
