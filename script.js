// Function Definition
function getWeather() {
    // API Key
    const apiKey = 'API_KEY'; // Replace with your OpenWeatherMap API key
    // Get City Input
    const city = document.getElementById('cityInput').value;
    // Construct API URL
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    // Fetch Data from API:
    fetch(url)
        // Handle the Response
        .then(response => response.json())
        // Process the Data
        .then(data => {
            // display is a reference to the element with the ID weatherDisplay.
            const display = document.getElementById('weatherDisplay');
            // If data.main exists (indicating the city was found), 
            // it updates the inner HTML of display with the 
            // temperature, humidity, wind speed, and weather description.
            if (data.main) {
                display.innerHTML = `Temperature: ${data.main.temp}°C<br>
                                     Humidity: ${data.main.humidity}%<br>
                                     Wind Speed: ${data.wind.speed} m/s<br>
                                     Weather: ${data.weather[0].description}`;
                // If data.main does not exist (indicating the city was not found), 
                // it displays an error message.                                     
            } else {
                display.innerHTML = "City not found. Please try again!";
            }
        })
        // If there is an error during the fetch process (e.g., network issues), 
        // it catches the error and logs it to the console. It also updates 
        // the weatherDisplay element to show an error message to the user.
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('weatherDisplay').innerHTML = "Failed to retrieve data. Check your network connection.";
        });
}
