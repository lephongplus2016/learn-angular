import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = "";
  showEvent(e){
    console.log(e.target.value);
    this.name = e.target.value;
    
  }
}
