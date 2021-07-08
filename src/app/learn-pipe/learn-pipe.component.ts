import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {

  birthday  = new Date(2000,7,12);
  person = {
    'name':'Phong Le',
    'age':'21'
  }

  // Cách gọi thẻ tag
//   <p>{{birthday  | date}}</p>

// <p>{{person | json | uppercase}}</p>
  constructor() { }

  ngOnInit(): void {
  }

}
