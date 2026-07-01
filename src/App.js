import React, { useState } from "react";
import "./App.css";
import Weather from "./components/weather";
import background from "./images/background.jpg";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "78ffe02b3f8be7bff0e282c070463e63";

  // Fetch weather by city name
  const getWeather = async () => {
    if (city.trim() === "") return;
    fetchWeatherData(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
  };

  // Fetch weather by current location
  const getLocalWeather = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    // 🌟 FIX: Reset everything instantly so old data disappears immediately
    setWeather(null);
    setCity(""); 
    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherData(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
        );
      },
      () => {
        setError("Location access denied. Please type a city manually.");
        setLoading(false);
      }
    );
  };

  // Unified helper function to fetch data
  const fetchWeatherData = async (url) => {
    try {
      setLoading(true);
      setError("");
      
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod !== 200) {
        setError(data.message || "Location not found");
        setWeather(null);
        return;
      }

      setWeather(data);
    } catch (error) {
      setError("Something went wrong. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${background})`
      }}
    >
      <h1>🌤 Weather App</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && getWeather()}
        />

        <button onClick={getWeather}>Search</button>
        
        <button className="location-btn" onClick={getLocalWeather} title="Use Current Location">
          📍 Loc
        </button>
      </div>

      {loading && <div className="spinner"></div>}

      {error && <p className="error">{error}</p>}

      {!loading && weather && <Weather weather={weather} />}
    </div>
  );
}

export default App;