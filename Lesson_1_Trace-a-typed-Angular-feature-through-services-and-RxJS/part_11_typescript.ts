// excerpt: current-weather.component.ts

ngOnInit() {

  this.weatherService.getCurrentWeather('Lisbon').subscribe(weather => {

    this.current = weather

  })

}



// template excerpt

<h2>{{ current.city }}, {{ current.country }}</h2>

<img [src]="current.image" [alt]="current.description">

<span>{{ current.temperature }}</span>
