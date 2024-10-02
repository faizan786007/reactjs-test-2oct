import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";

// const apiKey = "82234c6f51b1b050c06733fd2d18d8b7";
// https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}
const WeatherAPP = () => {
	const [city, setCity] = useState("");
	const [weatherData, setWeatherData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	function handleChange(e) {
		setCity(e.target.value);
	}
	function handleClick() {
		if (city) {
			fetchData(city);
			setCity("");
			setError("");
			setWeatherData(null);
		}
	}

	async function fetchData(city) {
		try {
			setLoading(true);
			const apikey = "18d74e041a69a022458daa4c793ee141";
			let response = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${city},${356}&appid=${apikey}`
			);
			console.log(response.data);
			setWeatherData(response.data);
			setLoading(false);
		} catch (error) {
			console.error(error);
			setError("Failed to fetch weather data. Please try again.");
			setLoading(false);
		}
	}
	useEffect(() => {
		console.log(weatherData);
	}, [setWeatherData]);
	return (
		<div className="main-conatiner">
			<input
				type="text"
				placeholder="enter city"
				value={city}
				onChange={handleChange}
			/>
			<button onClick={handleClick}>enter</button>
			{loading && <p>Loading data...</p>}
			{error && <p style={{ color: "red" }}>{error}</p>}
			{weatherData && <WeatherDisplay weatherData={weatherData} />}
		</div>
	);
};

export default WeatherAPP;
