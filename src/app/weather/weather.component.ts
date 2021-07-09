import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService],
})
export class WeatherComponent implements OnInit {
  temp: any;
  cityName: string = '';
  cityNameShow = '';
  isLoading = false;
  error = false;

  constructor(private weatherAPI: WeatherService) {}

  ngOnInit(): void {}
  getTempByAPI() {
    this.cityNameShow = this.cityName;
    this.isLoading = true;
    this.error = false;
    console.log('city name ' + this.cityName);

    this.weatherAPI
      .getTempByAPI(this.cityName)
      .then((temp) => {
        console.log(temp);
        this.temp = temp;
        this.isLoading = false;
        this.cityName = '';

        //JSON.parse(JSON.stringify(temp));
      })
      .catch((err) => {
        this.error = true;
        this.isLoading = false;
        this.cityNameShow = '';
        console.log(err);
        console.log('loi roi ');
      });
  }

  getMessage() {
    if (this.isLoading) return 'Loading ...';
    else
      return this.cityNameShow === ''
        ? 'Weather viewer'
        : 'Nhiệt độ của thành phố ' + this.cityNameShow + ' là ' + this.temp;
  }
}
