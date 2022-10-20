import React, { FC, useEffect, useState } from "react";
import { Weather, WeatherLocation } from "../../model/Weather";
import { readForecast, readWeather } from "../../services/WeatherService";
import './WeatherSummary.scss';

interface WeatherSummaryProps {
    location: WeatherLocation | null;
}

export const WeatherSummary: FC<WeatherSummaryProps> = ({location}) => {
    // const [weather, setWeather] = useState<Weather | null>(null);
    // const [forecast, setForecast] = useState<Weather[] | null>(null);

    // useEffect(() => {
    //     (async function () {
    //         if (location) {
    //             const [weather, forecast] = await Promise.all([
    //                 readWeather(location.id),
    //                 readForecast(location.id)
    //             ]);
    //             setWeather(weather);
    //             setForecast(forecast)
    //             }
    //     })();
    // }, [location]);

    // if (!location || !weather || !forecast) return null;

    return (
        <div className='weather-summary'>
            <h4 className="weather-summary__city">
            ABBEVILLE
            </h4>
            <div className="weather-summary__temperature">
            <i className="wi wi-icon-802"></i>
            <span>2</span>
            </div>
            <div className="weather-summary__future">
                <div className="future-day">
                    <p className="day">Tue</p>
                    <span className="icon"><i className="wi wi-icon-802"></i></span>
                    <span className="temp-max">7</span>
                    <span className="temp-min">3</span>
                </div>
                <div className="future-day">
                    <p className="day">Wed</p>
                    <span className="icon"><i className="wi wi-icon-802"></i></span>
                    <span className="temp-max">7</span>
                    <span className="temp-min">3</span>
                </div>
                <div className="future-day">
                    <p className="day">Thu</p>
                    <span className="icon"><i className="wi wi-icon-802"></i></span>
                    <span className="temp-max">7</span>
                    <span className="temp-min">3</span>
                </div>
            </div>
        </div>
    );
};