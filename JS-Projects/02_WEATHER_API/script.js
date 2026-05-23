document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  // New elements
  const countryBadge = document.getElementById("country-badge");
  const weatherDate = document.getElementById("weather-date");
  const weatherIconMain = document.getElementById("weather-icon-main");
  const humidityEl = document.getElementById("humidity");
  const windSpeedEl = document.getElementById("wind-speed");
  const feelsLikeEl = document.getElementById("feels-like");
  const visibilityEl = document.getElementById("visibility");
  const sunriseEl = document.getElementById("sunrise-time");
  const sunsetEl = document.getElementById("sunset-time");
  const sunTrackFill = document.getElementById("sun-track-fill");
  const sunDot = document.getElementById("sun-dot");

  const API_KEY = "bd7ca146c68d442c2dcff9b415c4b2da";

  // ── Weather icon mapping ──────────────────────────────────
  const weatherIcons = {
    "clear sky": "☀️",
    "few clouds": "🌤️",
    "scattered clouds": "⛅",
    "broken clouds": "🌥️",
    "overcast clouds": "☁️",
    "light rain": "🌦️",
    "moderate rain": "🌧️",
    "heavy intensity rain": "⛈️",
    thunderstorm: "⛈️",
    snow: "❄️",
    "light snow": "🌨️",
    mist: "🌫️",
    haze: "🌫️",
    fog: "🌫️",
    drizzle: "🌦️",
    "shower rain": "🌧️",
    sleet: "🌨️",
  };

  function getWeatherIcon(description) {
    const desc = description.toLowerCase();
    for (const [key, emoji] of Object.entries(weatherIcons)) {
      if (desc.includes(key)) return emoji;
    }
    return "🌡️";
  }

  // ── Background theme per condition ────────────────────────
  function applyWeatherTheme(description) {
    const desc = description.toLowerCase();
    const body = document.body;
    body.removeAttribute("data-weather");
    if (desc.includes("clear")) body.setAttribute("data-weather", "clear");
    else if (desc.includes("cloud"))
      body.setAttribute("data-weather", "cloudy");
    else if (desc.includes("rain") || desc.includes("drizzle"))
      body.setAttribute("data-weather", "rain");
    else if (desc.includes("snow") || desc.includes("sleet"))
      body.setAttribute("data-weather", "snow");
    else if (desc.includes("thunder"))
      body.setAttribute("data-weather", "storm");
    else if (
      desc.includes("mist") ||
      desc.includes("fog") ||
      desc.includes("haze")
    )
      body.setAttribute("data-weather", "mist");
  }

  // ── Time formatter ────────────────────────────────────────
  function formatTime(unixTimestamp, timezone) {
    const date = new Date((unixTimestamp + timezone) * 1000);
    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  // ── Date formatter ────────────────────────────────────────
  function formatDate() {
    return new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  // ── Sun progress tracker ──────────────────────────────────
  function updateSunProgress(sunrise, sunset, timezone) {
    const now = Math.floor(Date.now() / 1000) + timezone;
    const total = sunset - sunrise;
    const elapsed = now - sunrise;
    let pct = Math.max(0, Math.min(100, (elapsed / total) * 100));
    if (sunTrackFill) sunTrackFill.style.width = pct + "%";
    if (sunDot) sunDot.style.left = pct + "%";
  }

  // ── Fetch ─────────────────────────────────────────────────
  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    return await response.json();
  }

  // ── Display ───────────────────────────────────────────────
  function displayWeatherData(data) {
    const { name, main, weather, wind, visibility, sys, timezone } = data;
    const desc = weather[0].description;

    // Core (original IDs preserved)
    cityDisplay.textContent = name;
    temperatureDisplay.textContent = `${Math.round(main.temp)}°C`;
    descriptionDisplay.textContent =
      desc.charAt(0).toUpperCase() + desc.slice(1);

    // Enhanced
    if (countryBadge) countryBadge.textContent = sys.country;
    if (weatherDate) weatherDate.textContent = formatDate();
    if (weatherIconMain) weatherIconMain.textContent = getWeatherIcon(desc);
    if (humidityEl) humidityEl.textContent = `${main.humidity}%`;
    if (windSpeedEl)
      windSpeedEl.textContent = `${Math.round(wind.speed * 3.6)} km/h`;
    if (feelsLikeEl)
      feelsLikeEl.textContent = `${Math.round(main.feels_like)}°C`;
    if (visibilityEl)
      visibilityEl.textContent = `${(visibility / 1000).toFixed(1)} km`;
    if (sunriseEl) sunriseEl.textContent = formatTime(sys.sunrise, timezone);
    if (sunsetEl) sunsetEl.textContent = formatTime(sys.sunset, timezone);

    updateSunProgress(sys.sunrise, sys.sunset, timezone);
    applyWeatherTheme(desc);

    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");

    // Trigger re-animation
    weatherInfo.classList.remove("animate-in");
    void weatherInfo.offsetWidth; // reflow
    weatherInfo.classList.add("animate-in");
  }

  // ── Error ─────────────────────────────────────────────────
  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
    errorMessage.classList.remove("shake");
    void errorMessage.offsetWidth;
    errorMessage.classList.add("shake");
  }

  // ── Button loading state ──────────────────────────────────
  function setLoading(on) {
    const btnText = getWeatherBtn.querySelector(".btn-text");
    const btnIcon = getWeatherBtn.querySelector(".btn-icon");
    getWeatherBtn.disabled = on;
    if (on) {
      if (btnText) btnText.textContent = "Loading";
      if (btnIcon) btnIcon.textContent = "⟳";
      getWeatherBtn.classList.add("loading");
    } else {
      if (btnText) btnText.textContent = "Search";
      if (btnIcon) btnIcon.textContent = "→";
      getWeatherBtn.classList.remove("loading");
    }
  }

  // ── Event: button click ───────────────────────────────────
  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) {
      cityInput.classList.add("shake");
      setTimeout(() => cityInput.classList.remove("shake"), 500);
      return;
    }
    setLoading(true);
    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    } finally {
      setLoading(false);
    }
  });

  // ── Event: Enter key ──────────────────────────────────────
  cityInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") getWeatherBtn.click();
  });
});
