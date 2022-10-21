import React, { FC } from "react";
import { WeatherData, WeatherForecast } from "../../model/Weather";
import './WeatherSummary.scss';

interface WeatherSummaryProps {
    weather: WeatherData | null;
    forecast: WeatherForecast[] | null;
}

export const WeatherSummary: FC<WeatherSummaryProps> = ({weather, forecast}) => {
    return (
        <div className='weather-summary'>
            {weather && 
            <h4 className="weather-summary__city">
            { weather?.name }
            </h4>
            }
            <div className="weather-summary__temperature">
            {weather && 
            <i className="wi wi-icon-802"></i>
            }
            <span>{ weather?.main.temp } { weather && <sup>&#176;</sup> }</span>
            </div>
            <div className="weather-summary__future">
                {
                    forecast && forecast.map((day, index) => (
                        <div className="future-day" key={index}>
                            <p className="day">Tue</p>
                            <span className="icon"><i className={`wi wi-icon-${day?.weather[0].id}`}></i></span>
                            <span className="temp-max">{day?.main.temp_max}</span>
                            <span className="temp-min">{day?.main.temp_min}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};