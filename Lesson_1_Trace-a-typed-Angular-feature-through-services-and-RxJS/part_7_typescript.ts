getCurrentWeather(city: string): Observable<ICurrentWeather> {

  return this.http.get<ICurrentWeatherData>(apiUrl, { params: { city } }).pipe(

    map(data => ({

      city: data.name,

      country: data.sys.country,

      date: data.dt * 1000,

      image: `/assets/weather/${data.weather[0].icon}.png`,

      temperature: data.main.temp,

      description: data.weather[0].description

    }))

  )

}
