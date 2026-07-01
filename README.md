# 🌦️ Weather App

A modern and responsive Weather Application built with **React.js** that provides real-time weather information for any city using a weather API.

---

## 📖 Overview

The Weather App allows users to search for any city and view its current weather conditions in real time. It features a clean, intuitive, and responsive interface that works seamlessly across desktop and mobile devices.

---

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Real-time temperature display
- ☁️ Current weather condition
- 💧 Humidity information
- 🌬️ Wind speed details
- 📍 City-based weather search
- 📱 Responsive design
- ⚡ Fast and lightweight application

---

## 🛠️ Tech Stack

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Weather API
- Create React App

---

## 📂 Project Structure

```text
weather-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.js
│   ├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/weather-app.git
```

### 2. Navigate to the project

```bash
cd weather-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm start
```

The application will be available at:

```
http://localhost:3000
```

---

## 🌐 API

This project fetches live weather data using a Weather API.

If you're using **OpenWeather API**, create a `.env` file in the project root and add your API key:

```env
REACT_APP_WEATHER_API_KEY=YOUR_API_KEY
```

Then restart the development server.

---

## 📌 Usage

1. Enter the name of a city.
2. Click the **Search** button.
3. View the current weather information, including:
   - Temperature
   - Weather Condition
   - Humidity
   - Wind Speed
