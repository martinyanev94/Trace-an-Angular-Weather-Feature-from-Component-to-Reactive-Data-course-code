// src/app/weather/weather.service.ts

@Injectable()

export class WeatherService {

  constructor(private http: HttpClient) {}



  getCurrentWeather(city: string): Observable<ICurrentWeatherData> {

    return this.http.get<ICurrentWeatherData>(apiUrl, {

      params: { city }

    })

  }

}
