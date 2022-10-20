import React from 'react'
import {FC, useState} from "react";
import './LocationSearch.scss';

interface LocationSearchProps {
    onSearch: (search: string) => void;
}

export const LocationSearch: FC<LocationSearchProps> = ({onSearch}) => {
    // const [locationSearch, setLocationSearch] = useState('');
    const [locationSearch, setLocationSearch] = useState('');
  
    const addLocation = () => {
      onSearch(locationSearch);
      setLocationSearch('');
    };

    return (
        
        <div className='weather-search'>
            {/* <label>
                Add Location 
                <input className="ml-1 mr-1" 
                    type="text" 
                    value={locationSearch} 
                    onChange={e => setLocationSearch(e.target.value)} 
                />
            </label>
            <button className="btn btn-primary" 
                onClick={addLocation} 
            >
                Search
            </button> */}

            <h3 className="weather-search__title">Sélectionner votre ville</h3>
            <div className='weather-search__field'>
                <select name="" id="" onChange={addLocation}>
                    <option value="">1</option>
                    <option value="">2</option>
                </select>
            </div>
        </div>
    )
}
