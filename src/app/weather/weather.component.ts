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
  constructor(private weatherAPI: WeatherService) {}

  ngOnInit(): void {
    this.weatherAPI
      .getTempByAPI('London')
      .then((temp) => {
        console.log(temp);
        this.temp = temp;
        //JSON.parse(JSON.stringify(temp));
      })
      .catch((err) => console.log(err));
  }
}
