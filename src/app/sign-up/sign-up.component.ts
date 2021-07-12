import { Component, OnInit } from '@angular/core';
//Cần import các thư viện liên quan đến REACTIVE FORM
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  formSignIn: FormGroup;
  // param là một object của json
  // khoi tao o day, gan form o html
  constructor() {
    this.formSignIn = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.formSignIn.value);
  }
}
