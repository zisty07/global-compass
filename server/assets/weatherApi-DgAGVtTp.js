const USER_KEY = "d74e5be6ef27ba3a1e7c2d1cea7ada47";
const API_KEY = USER_KEY;
const hasWeatherKey = () => Boolean(USER_KEY);
async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Weather lookup failed (${res.status})`);
  const d = await res.json();
  return {
    city: d.name,
    country: d.sys?.country ?? "",
    temperature: d.main?.temp ?? 0,
    feelsLike: d.main?.feels_like ?? 0,
    humidity: d.main?.humidity ?? 0,
    windSpeed: d.wind?.speed ?? 0,
    description: d.weather?.[0]?.description ?? "",
    icon: d.weather?.[0]?.icon ?? "01d"
  };
}
export {
  getWeather as g,
  hasWeatherKey as h
};
