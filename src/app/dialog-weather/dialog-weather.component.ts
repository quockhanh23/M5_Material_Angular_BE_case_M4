import { Component, OnInit } from '@angular/core';
const URL_API = 'https://api.openweathermap.org/data/2.5/weather?q=Hanoi,vie&APPID='
const KEY = 'aa23e2f239142a14f1b06d3316a74862'
@Component({
  selector: 'app-dialog-weather',
  templateUrl: './dialog-weather.component.html',
  styleUrls: ['./dialog-weather.component.css']
})
export class DialogWeatherComponent implements OnInit {

  WeatherData:any;
  constructor() { }

  ngOnInit() {
    this.WeatherData = {
      main : {},
      isDay: true
    };
    this.getWeatherData();
    console.log(this.WeatherData);
  }
  getWeatherData(){
    fetch(URL_API + KEY)
      .then(response=>response.json())
      .then(data=>{this.setWeatherData(data);})
  }

  setWeatherData(data:any){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }

}
