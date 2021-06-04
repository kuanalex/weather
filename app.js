async function getWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Markham, CA&appid=08a911be2a5e6a05de2068aeb4643b3b&units=metric', {
        mode: 'cors'
    });
    const weatherData = await response.json();
    console.log(weatherData);

    let data = {
        temp: weatherData.main.temp;

    }

}

getWeather();

// api.openweathermap.org/data/2.5/weather?q=Markham, CA&appid=08a911be2a5e6a05de2068aeb4643b3b&units=metric