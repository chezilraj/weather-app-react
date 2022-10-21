import React, {FC, useState} from 'react';
import { LocationSearch } from './components/locationSearch/LocationSearch';
import {searchLocation, readForecast} from "./services/WeatherService"
import { WeatherSummary } from './components/weatherSummary/WeatherSummary';
import {WeatherData, WeatherForecast, City} from './model/Weather';

const App: FC = () => {

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<WeatherForecast[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  let addLocation = async (location: City | null) => {
    if(location){
      const latitude = location?.lat
      const longitude = location?.lon
      setLoading(true)
      const currentWeather = await searchLocation(latitude, longitude);
      const forecastWeather = await readForecast(latitude, longitude);
      if(currentWeather){
        setWeatherData(currentWeather)
        setForecastData(forecastWeather)
      }
      if(currentWeather && forecastWeather){
        setLoading(false)
      }
    }
  };

  return (
    <div className="container">
      <div className='weather'>
       <LocationSearch onSearch={addLocation} />
        { loading ? 
          <div className="loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> :
          <WeatherSummary weather={weatherData} forecast={forecastData} />
        }

      </div>
    </div>
  );
}

export default App;
