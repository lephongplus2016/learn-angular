import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structual',
  templateUrl: './structual.component.html',
  styleUrls: ['./structual.component.css']
})
export class StructualComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ListOfSubject = ['Nodejs', 'Angularjs', 'TypeScript', 'Vuejs'];

}
