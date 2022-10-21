export interface City {
    id: number;
    nm: string;
    lat: number;
    lon: number;
}
export interface WeatherData {
    name: string;
    main: {
        temp: number;
    }
}
export interface WeatherForecast {
    weather: any;
    main: any;
    list: []
}
