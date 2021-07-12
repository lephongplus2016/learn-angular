import { Component } from '@angular/core';
import { SignInService } from './sign-in.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-sign-in',
  template: `
    <form (ngSubmit)="onSubmit(formSignIn)" #formSignIn="ngForm">
      <input
        type="text"
        placeholder="Emal"
        ngModel
        #txtEmail="ngModel"
        name="email"
        required
        email
      />

      <!-- kiểm tra email có rỗng không             -->
      <div class="alert" *ngIf="txtEmail.touched && txtEmail.errors?.required">
        <span
          class="closebtn"
          onclick="this.parentElement.style.display='none';"
          >&times;</span
        >
        <strong>Email is required</strong>
      </div>
      <!--  kiểm tra email có valid không -->

      <div class="alert" *ngIf="txtEmail.touched && txtEmail.errors?.email">
        <span
          class="closebtn"
          onclick="this.parentElement.style.display='none';"
          >&times;</span
        >
        <strong>Email is not valid</strong>
      </div>

      <br /><br />
      <input
        type="password"
        placeholder="password"
        ngModel
        name="password"
        #txtPassword="ngModel"
        minlength="6"
        pattern="[a-zA-Z ]*"
      />

      <br /><br />
      <div ngModelGroup="club">
        <label>
          <input type="checkbox" [ngModel]="false" name="real" /> Real
          Madrid</label
        >
        <label>
          <input type="checkbox" [ngModel]="false" name="juve" /> Juve</label
        >
        <label>
          <input type="checkbox" [ngModel]="false" name="liv" />
          Liverpool</label
        >

        <br /><br />
      </div>

      <button [disabled]="formSignIn.invalid">Submit</button>

      <button (click)="postToServerTest()">post</button>
    </form>

    <p>{{ txtEmail.errors | json }}</p>
    <p>{{ txtPassword.errors | json }}</p>
    <p>{{ formSignIn.value | json }}</p>
  `,
  providers: [SignInService],
})
// [disable] sẽ ẩn nút đi nếu form bị invalid
// form sẽ invalid nếu input nào có required=> ko được để trống

//[ngModel]='false' là gán mặc định giá trị

// các txtEMail hay txtPassword được gọi là template validator

//chú ý mọi thành phần của form đều phải có name và có khai báo ngModel ko ngoặc

// lỗi sẽ được truy xuất theo template validator của mỗi thành phần

// tất cả truy xuất theo json cả

// ngModelGroup sẽ gop nhóm check box hoặc 1 nhóm nào đó
export class SignInComponent {
  constructor(
    private httpclient: HttpClient,
    private signinservice: SignInService
  ) {}

  postToServerTest() {
    const url = 'http://localhost:3000/signin';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({ name: 'phong' });
    this.httpclient
      .post(url, body, { headers })
      .toPromise()
      .then((res) => res)
      .then((resText) => console.log(resText))
      .catch((err) => console.log('loi roi ' + err));
  }

  // do ở sign-in.service.ts ko thể nhận formSignIn nên phải truyền value vào
  onSubmit(formSignIn) {
    //console.log(formSignIn.value);
    this.signinservice
      .postToServer(formSignIn.value)
      .then((result) => console.log(result))
      .catch((err) => console.log('loi roi ' + err));
  }
  //tại .then((result) => console.log(result)) sẽ đón giá trị return của hàm postToServer, đặt tên gì cũng được
}
