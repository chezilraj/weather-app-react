import React, {FC, useState} from 'react';


import { LocationSearch } from './components/locationSearch/LocationSearch';

import {WeatherLocation} from './model/Weather';
import {searchLocation} from "./services/WeatherService"
import { WeatherSummary } from './components/weatherSummary/WeatherSummary';

const App: FC = () => {

  const [currentLocation] = useState<WeatherLocation | null>(null);

  let addLocation = async (term: string) => {
    alert()
  };

  return (
    <div className="container">
      <div className='weather'>
          <LocationSearch  onSearch={addLocation}/>
          <WeatherSummary location={currentLocation} />
      
      {/* <h1>Weather App</h1>
      <LocationSearch onSearch={addLocation}/> 
      <ErrorAlert message={error}/>
      <WarningAlert message={warning}/>
      <LocationTable 
        locations={locations}
        current={currentLocation}
        onSelect={location => setCurrentLocation(location)}
      />
      <WeatherSummary location={currentLocation}/> */}
    </div>
    </div>
  );
}

export default App;
