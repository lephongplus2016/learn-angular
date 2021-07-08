import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-person',
  templateUrl: './input-person.component.html',
  styleUrls: ['./input-person.component.css']
})
export class InputPersonComponent implements OnInit {
  @Input() name: string;
  @Input() age:number;
  @Output() removePerson = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  removeByClick() {
    this.removePerson.emit(this.name);
  }
}
