// src/app/current-weather/current-weather.component.ts

import { ICurrentWeather } from '../interfaces'



export class CurrentWeatherComponent {

  current!: ICurrentWeather



  constructor(private weatherService: WeatherService) {}

}
