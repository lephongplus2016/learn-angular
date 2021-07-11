import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SignInService {
  constructor(private httpclient: HttpClient) {}

  postToServer(value) {
    const url = 'http://localhost:3000/signin';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //const body = JSON.stringify({ formSignIn });
    const body = value;
    return this.httpclient
      .post(url, body, { headers })
      .toPromise()
      .then((res: any) => res);

    //.catch((err) => console.log('loi roi ' + err));
  }
}
//hàm catch sẽ ưu tiên chạy ở đây, bên kia ko bắt được catch nữa
