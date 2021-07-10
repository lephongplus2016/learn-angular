import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  template: `
    <form (ngSubmit)="onSubmit(formSignIn)" #formSignIn="ngForm">
      <input type="text" placeholder="Emal" [(ngModel)]="email" name="email" />
      <br /><br />
      <input
        type="password"
        placeholder="password"
        [(ngModel)]="password"
        name="password"
      />
      <br /><br />
      <button>Submit</button>
    </form>
  `,
})
export class SignInComponent {
  password = '';
  email = '';
  onSubmit(formSignIn) {
    console.log(formSignIn.value);
  }
}
