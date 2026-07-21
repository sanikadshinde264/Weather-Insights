# 🌦️ Weather Insights

## 📝 One-Line Summary
A responsive React weather app that shows live conditions for any city (or your current location) with an animated real-time temperature trend graph.

---

## 🔎 Overview
Weather Insights is a single-page React application that fetches live weather data from the **OpenWeatherMap API**. Users can search by city name or use their device's geolocation to get weather for their current location. Results are shown on a clean weather card — temperature, condition icon, feels-like, high/low, humidity, wind speed, and pressure — alongside a custom SVG graph that animates a live-updating temperature trend.

---

## ❓ Problem Statement
Checking the weather often means digging through cluttered sites full of ads and unnecessary detail. Weather Insights solves that by providing:
- A single, distraction-free screen with the weather details that actually matter
- Search by city name **or** one-tap lookup using the browser's geolocation
- Instant visual feedback (loading spinner, inline error messages) instead of a blank or broken screen
- A lightweight live-trend visualization without pulling in a full charting library

---

## ✨ Features
- 🔍 Search weather by city name
- 📍 "Use Current Location" button powered by browser geolocation
- 🌡️ Live conditions: temperature, feels-like, high/low, description, and icon
- 💧 Humidity, 🌬️ wind speed, and 🧭 pressure readouts
- 📊 Custom animated SVG graph showing a live-updating temperature trend
- ⏳ Loading spinner and inline error handling (invalid city, denied location access, network issues)
- 📱 Fully responsive, image-backed UI

---

## 🗂️ Dataset
This project has no static dataset — all weather data is fetched live from the **OpenWeatherMap Current Weather API** based on the city name or coordinates the user provides. Nothing is persisted; each search simply replaces the data shown on screen.

---

## 🛠️ Tools & Technologies
- **Frontend:** React 19 (Create React App / `react-scripts`)
- **Language:** JavaScript (ES6+), HTML5, CSS3
- **Data fetching:** native `fetch` API
- **Graphing:** hand-built SVG line graph (no external charting library)
- **Weather data:** OpenWeatherMap API
- **Browser API:** Geolocation API

---

## ⚙️ Methods / Methodology
1. **Data fetching:** `App.js` builds an OpenWeatherMap request URL (by city name or lat/lon) and calls it with `fetch`, handling loading and error states via React state hooks.
2. **Geolocation:** `getLocalWeather` uses `navigator.geolocation.getCurrentPosition` to grab coordinates and reuses the same fetch helper, falling back to an error message if access is denied or unsupported.
3. **Weather display:** `components/weather.js` renders the returned data into a weather card — condition icon, temperature, and a detail grid (feels-like, high/low, humidity, wind, pressure).
4. **Live trend graph:** `components/RealtimeGraph.js` seeds 8 points around the current temperature, then drifts them at a 1-second interval with `setInterval`, redrawing an SVG `path` and dots via `useMemo` for a smooth "live" animation effect.
5. **Styling:** A full-bleed background image with a dark overlay (`App.css`) keeps the card and text readable across screen sizes.

---

## 📁 Project Directory Structure
```text
Weather-Insights/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── weather.js            Weather card (details + trend graph)
│   │   └── RealtimeGraph.js      Animated SVG live temperature trend
│   ├── images/
│   │   └── background.jpg
│   ├── App.js                    App shell, search, geolocation, fetch logic
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── App.test.js
│   ├── setupTests.js
│   └── reportWebVitals.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 🖥️ Dashboard / Model / Output
The app runs as a single screen at `http://localhost:3000`:
- A search bar with **Search** and **📍 Loc** (current location) buttons
- A weather card showing the city name, condition icon, temperature, and description
- A **Live Trend** SVG graph that continuously animates near the current temperature
- A detail grid for feels-like, high/low, humidity, wind speed, and pressure
- Inline loading spinner and error messages for invalid cities or denied location access

---

## 💡 Key Insights
- A native `fetch` call plus a few React state hooks is enough to build a fully working weather lookup — no extra HTTP client needed.
- A small hand-rolled SVG path (via `useMemo`) can deliver a convincing "live" chart without pulling in a full charting library.
- Resetting state immediately when a new search starts (before the network call resolves) avoids showing stale data while loading.

---

## ✅ Results & Conclusion
Weather Insights delivers accurate, live weather information for any city or current location through a fast, minimal, single-page interface, complete with a lightweight animated trend visualization — all without external HTTP or charting dependencies.

---

## ▶️ How to Run the Project

### Requirements
- **Node.js 18+**
- **npm**
- A free **OpenWeatherMap API key**

### 1. Get the project
```bash
git clone https://github.com/your-username/Weather-Insights.git
cd Weather-Insights
```

### 2. Install dependencies
```bash
npm install
```

### 3. Add your API key
Open `src/App.js` and replace the placeholder with your OpenWeatherMap key:
```js
const API_KEY = "YOUR API_KEY_HERE"; // Replace with your actual OpenWeatherMap API key
```

### 4. Start the development server
```bash
npm start
```

### 5. Open the app
```
http://localhost:3000

---

## 🚀 Future Work
- Move the API key into a `.env` file instead of hardcoding it in `App.js`
- Add hourly/daily forecast data alongside current conditions
- Replace the simulated live-trend graph with real historical/forecast temperature data
- Add unit toggles (°C / °F)
- Add recent-search history
- Add dark mode

---

## 👤 Author & Contact
**Sanika Shinde** <br>
📧 [sanikadshinde264@gmail.com] | 🔗 [www.linkedin.com/in/sanikadshinde264] 
