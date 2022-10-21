import React from 'react'
import {FC, useEffect} from "react";
import './LocationSearch.scss';
import { City } from '../../model/Weather';
import cities from '../../data/cities-fr.json';
interface LocationSearchProps {
    onSearch: (search: City | null) => void;
}

export const LocationSearch: FC<LocationSearchProps> = ({onSearch}) => {
    const defaultValue =  3038789;
  
    const addLocation = (locationId: number) => {
        const selectedCity = cities.filter((city) => city.id === locationId)
        onSearch(selectedCity[0]);
    };

    useEffect(() => {
        addLocation(defaultValue)
      }, []);

    return (
        
        <div className='weather-search'>
            <h3 className="weather-search__title">Sélectionner votre ville</h3>
            <div className='weather-search__field'>
                <select onChange={e => addLocation(Number(e.target.value))}>
                    {
                        cities.map((city) => (
                            <option key={city.id} value={city.id}>{city.nm}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}
