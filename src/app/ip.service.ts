import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class IpService {
  constructor(private httpclient: HttpClient) {}

  // không biết vì sao nhưng , ko có responseType thì ở getmyip thì log đc ra json,
  // nhưng ở componet call service thì ko nhận đc dạng json nữa
  getMyIp() {
    return (
      this.httpclient
        .get('http://ip.jsontest.com/', { responseType: 'json' })
        .toPromise()
        // đã không còn có thể lấy trực tiếp resJson.ip được nữa
        // không nhất thiết phải dùng biến Observable
        //.then(res => res.json())
        //.then(resJson => JSON.parse(JSON.stringyfy(res))
        .then((resJson) => resJson)
        .catch((err) => console.log(err))
    );
  }
  //HttpClient.get()áp dụng res.json()tự động và trả lại Observable<HttpResponse<string>>. Bạn không cần phải tự gọi hàm này nữa.
  //bình thường sẽ phải chạy res.json() trước thì phải lấy được resJson, nhưng ở angular 8 thì nó là tự động
}
