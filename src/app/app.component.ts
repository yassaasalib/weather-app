import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  weatherData: any;
  city: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getCurrentWeather('New York').subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }
  getWeather() {
    this.weatherService.getCurrentWeather(this.city).subscribe(data => {
      this.weatherData = data;
    });
  }
}
