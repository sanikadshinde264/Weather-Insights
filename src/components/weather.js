import React from "react";
import RealtimeGraph from "./RealtimeGraph";

function Weather({ weather }) {
  return (
    <div className="weather-card">
      <h2>{weather.name}, {weather.sys.country}</h2>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />

      <h1 className="temp">{Math.round(weather.main.temp)}°C</h1>
      <p className="description">{weather.weather[0].description}</p>

      <RealtimeGraph temperature={weather.main.temp} />

      <div className="weather-details">
        <div className="detail-item">
          <span>🌡️ Feels Like</span>
          <strong>{Math.round(weather.main.feels_like)}°C</strong>
        </div>
        <div className="detail-item">
          <span>📈 High / Low</span>
          <strong>{Math.round(weather.main.temp_max)}° / {Math.round(weather.main.temp_min)}°</strong>
        </div>
        <div className="detail-item">
          <span>💧 Humidity</span>
          <strong>{weather.main.humidity}%</strong>
        </div>
        <div className="detail-item">
          <span>🌬️ Wind Speed</span>
          <strong>{weather.wind.speed} m/s</strong>
        </div>
        <div className="detail-item">
          <span>🧭 Pressure</span>
          <strong>{weather.main.pressure} hPa</strong>
        </div>
      </div>
    </div>
  );
}

export default Weather;