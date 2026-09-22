document.addEventListener("DOMContentLoaded" , ()=>{
    const cityInput = document.querySelector("#city-input")
    const getWeatherBtn = document.querySelector("#get-weather-btn")
    const weatherInfo = document.querySelector("#weather-info")
    const cityNameDisplay = document.querySelector("#city-name")
    const temparatureDisplay = document.querySelector("#temperature")
    const descriptionDisplay = document.querySelector("#description")
    const sunriseDisplay = document.querySelector("#sunrise")
    const sunsetDisplay = document.querySelector("#sunset")
    const weatherIcon = document.querySelector("#weather-icon")
    const errorMessage = document.querySelector("#error-message")


    const API_KEY = "25bd8620ab0713dfd6c71ba9f445f3bb" //env variable

    getWeatherBtn.addEventListener("click" , async() =>{
        const city = cityInput.value.trim();
        if(city === "") return ;
        
        //By calling the server of database it may take time to give the response , so handle the error message
          
        try {
           const weatherData =  await fetchWeatherData(city)
           displayWeatherData(weatherData);
        } catch (error) {
            showError()
        }
        
    })

    async function fetchWeatherData(city){
        // gets the data
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        const response = await fetch(url)
        console.log(response);
        if(!response.ok) {
            throw new Error("ERROR : City not found")
        } 
        const data = await response.json()        
        return data;
    }

    function displayWeatherData(data){
        // display the weatherData
        console.log(data);
        console.log(new Date(data.sys.sunrise * 1000).getHours());
        
        const {name , main , sys, weather} = data;

        weatherInfo.classList.remove("hidden")
        errorMessage.classList.add("hidden")

        cityNameDisplay.textContent = `${name} [${sys.country}]`
        temparatureDisplay.textContent = `Temparature : ${main.temp}°C`
        descriptionDisplay.textContent = `Weather Forcast : ${weather[0].description}`
        sunriseDisplay.textContent = `Sunrise [IST] : ${new Date(sys.sunrise * 1000).getHours()} : ${new Date(sys.sunrise * 1000).getMinutes()}`
        sunsetDisplay.textContent = `Sunset [IST] : ${(new Date(sys.sunset * 1000).getHours())} : ${new Date(sys.sunset * 1000).getMinutes()}`
        weatherIcon.src = ` https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`


        
    }

    function showError(){
        weatherInfo.classList.add("hidden")
        errorMessage.classList.remove("hidden")
    }

})