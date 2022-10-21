import { WeatherData, WeatherForecast } from '../model/Weather';

const key: string = '44668a3007eb39fd39b5e748a2492187';
const apiKey = `appid=${key}`
const endpoint = 'https://api.openweathermap.org/data/2.5';

export async function searchLocation(lat: number, lon: number): Promise<WeatherData | undefined> {
  const result = await fetch(`${endpoint}/weather?lat=${lat}&lon=${lon}&units=metric&${apiKey}`);

  if (result.status === 404) return undefined;
  if (result.status !== 200) throw new Error('Failed to read location data');

  return await result.json();
}

export async function readForecast(lat: number, lon: number): Promise<WeatherForecast[]> {
  const forecast = await fetch(`${endpoint}/forecast?lat=${lat}&lon=${lon}&units=metric&cnt=3&${apiKey}`);

  if (forecast.status !== 200) throw new Error('Failed to read location data');

  return (await forecast.json()).list;
}