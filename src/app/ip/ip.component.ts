import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { IpService } from '../ip.service';
//import { Observable } from 'rxjs/internal/Observable';
//import {Observable} from 'rxjs';

// Http và HttpModule đã không còn hỗ trợ nữa,
// bây giờ phải sử dụng HttpClient và HttpModule, nhưng cách dùng y chang.

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.css'],
  providers: [IpService],
})
// export class IpComponent //implements OnInit
// {
//   ip= {};
//   constructor (private http: HttpClient){
//     this.http.get('http://ip.jsontest.com/')
//     .toPromise()
//     // đã không còn có thể lấy trực tiếp resJson.ip được nữa
//     // không nhất thiết phải dùng biến Observable
//     //.then(res => res.json())
//     .then(resJson => {console.log(resJson); this.ip = resJson})
//     .catch(err => console.log(err))
//    }
//    //HttpClient.get()áp dụng res.json()tự động và trả lại Observable<HttpResponse<string>>. Bạn không cần phải tự gọi hàm này nữa.
//    //bình thường sẽ phải chạy res.json() trước thì phải lấy được resJson, nhưng ở angular 8 thì nó là tự động

// //  ngOnInit(): void {
// //  }

// } //implements OnInit
export class IpComponent {
  ip: String;
  // cái ip trả về này liên tục báo void hoặc object gì đó nên ko thể gán cho ip đc
  // Đành phải ép kiểu string thì gán đc
  constructor(private ipservice: IpService) {
    this.ipservice.getMyIp().then((ip) => {
      console.log(ip);
      this.ip = JSON.parse(JSON.stringify(ip));
    });
    // console.log('ip ne '+this.ip);
  }
}
