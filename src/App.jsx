import React, { useState } from 'react'
import fetchWeather from './api/fetchWeather'
import './App.css'

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState([]);

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery('');
    }
  }

  return (
    <main className="container">
      <h1>Weather App</h1>
      <input type="text" className="search" placeholder="Enter the city" value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search}></input>
      {weather.main && (
        <div className="city">
          <div className="date"> {new Date().toDateString("en-US")}</div>
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].desccription}>
            </img>
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </main>

  )
}

export default App
