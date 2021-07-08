import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  arrPeople = [
    {name: 'Phong', age: 18},
    {name: 'Phú', age: 18},
    {name: 'Kha', age: 19},
  ]
  constructor() { }

  ngOnInit(): void {
  }
  removePersonByName(name){
    const idx = this.arrPeople.findIndex(e => e.name === name);
    this.arrPeople.splice(idx,1);
  }

  
}
