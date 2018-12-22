import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-local-forecast',
  templateUrl: './local-forecast.component.html',
  styleUrls: ['./local-forecast.component.css']
})
export class LocalForecastComponent implements OnInit {

  lat: number;
  lng: number;
  forecast: Observable<any>;

  constructor(private weather: WeatherService) { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    } else {
      this.lat = 40.73;
      this.lng = -73.93;
    }
  }

  getForecast() {
    this.forecast = this.weather.currentForecast(this.lat, this.lng)
    .do(data => console.log(data));
  }

  weatherIcon(icon) {
    switch (icon) {
      case 'partly-cloudy-day':
        return 'wi wi-day-cloudy';
      case 'clear-day':
        return 'wi wi-day-sunny';
      case 'partly-cloudy-night':
        return 'wi wi-night-partly-cloudy';
      default:
        return `wi wi-day-sunny`;
    }
  }

}
