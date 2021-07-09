import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherService {
  constructor(private httpclient: HttpClient) {}

  getTempByAPI(cityName: string) {
    return this.httpclient
      .get(
        'https://api.openweathermap.org/data/2.5/weather?appid=3b79e9bccbb9c443649ffe46406361e7&units=metric&q=' +
          cityName,
        { responseType: 'json' }
      )
      .toPromise()
      .then((res: any) => res.main.temp);
    //.catch((err) => console.log('loi roi ' + err));
  }
}
//hàm catch sẽ ưu tiên chạy ở đây, bên kia ko bắt được catch nữa
