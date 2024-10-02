import React from "react";

const WeatherDisplay = (props) => {
	const {
		name: city,
		main: { humidity, temp },
		weather: [{ description, id }],
		wind: { speed },
	} = props.weatherData;
	function tempConvert() {
		let t = (temp - 273.15).toFixed(1);
		return t;
	}
	function getWeatherEmoji(weatherId) {
		switch (true) {
			case weatherId >= 200 && weatherId < 300:
				return "⛈️"; // Thunderstorm
			case weatherId >= 300 && weatherId < 400:
				return "🌧️"; // Drizzle
			case weatherId >= 500 && weatherId < 600:
				return "🌧️"; // Rain
			case weatherId >= 600 && weatherId < 700:
				return "❄️"; // Snow
			case weatherId >= 700 && weatherId < 800:
				return "🌫️"; // Atmosphere (fog, mist, etc.)
			case weatherId === 800:
				return "☀️"; // Clear sky
			case weatherId >= 801 && weatherId < 810:
				return "🌤️"; // Clouds
			default:
				return "❓"; // Unknown
		}
	}
	return (
		<div className="display">
			<h1>{city}</h1>
			<p>temperature :{tempConvert()}°C</p>
			<p>Humidity: {humidity}%</p>
			<p>Description: {description}</p>
			<p>Wind Speed: {speed} m/s</p>
			<p>{getWeatherEmoji(id)}</p>
		</div>
	);
};

export default WeatherDisplay;
