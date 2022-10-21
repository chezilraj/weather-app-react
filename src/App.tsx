import React, {FC, useState} from 'react';
import { LocationSearch } from './components/locationSearch/LocationSearch';
import {searchLocation, readForecast} from "./services/WeatherService"
import { WeatherSummary } from './components/weatherSummary/WeatherSummary';
import {WeatherData, WeatherForecast, City} from './model/Weather';

const App: FC = () => {

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<WeatherForecast[] | null>(null);

  let addLocation = async (location: City | null) => {
    if(location){
      const latitude = location?.lat
      const longitude = location?.lon
      const currentWeather = await searchLocation(latitude, longitude);
      const forecastWeather = await readForecast(latitude, longitude);
      if(currentWeather){
        setWeatherData(currentWeather)
        setForecastData(forecastWeather)
      }
    }
  };

  return (
    <div className="container">
      <div className='weather'>
          <LocationSearch  onSearch={addLocation}/>
          <WeatherSummary weather={weatherData} forecast={forecastData} />
      </div>
    </div>
  );
}

export default App;
