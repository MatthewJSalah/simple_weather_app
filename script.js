function getWeather() {
    const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your OpenWeatherMap API key
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const display = document.getElementById('weatherDisplay');
            if (data.main) {
                display.innerHTML = `Temperature: ${data.main.temp}°C<br>
                                     Humidity: ${data.main.humidity}%<br>
                                     Wind Speed: ${data.wind.speed} m/s<br>
                                     Weather: ${data.weather[0].description}`;
            } else {
                display.innerHTML = "City not found. Please try again!";
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('weatherDisplay').innerHTML = "Failed to retrieve data. Check your network connection.";
        });
}
