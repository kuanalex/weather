// Select Elements in DOM
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

// Add Event Listeners for submit button and click submit

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
});

searchBtn.addEventListener("click", async () => {
    if (searchInput.value === "") return;
    const location = searchInput.value;
    getWeather(location);
});


async function getWeather(location) {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=` + location + `&appid=08a911be2a5e6a05de2068aeb4643b3b&units=metric`;

    try {
        const response = await fetch(endpoint, {
            mode: 'cors'
        });

        if (!response.ok) throw new Error(`City not found`);

        const weatherData = await response.json();

        let data = {
            name: weatherData.name,
            temp: weatherData.main.temp,
            feelslike: weatherData.main.feels_like,
            humidity: weatherData.main.humidity,
            wind: weatherData.wind.speed,
        }

        // Update Element text in DOM
        cityName.textContent = data.name;
        temperature.textContent = data.temp + " °C";
        feelsLike.textContent = "Feels like: " + data.feelslike + " °C";
        humidity.textContent = "Humidity: " + data.humidity;
        wind.textContent = "Wind: " + data.wind;

        searchResult.classList.add("active");

    } catch (error) {
        alert(error);
        return null;
    }
}