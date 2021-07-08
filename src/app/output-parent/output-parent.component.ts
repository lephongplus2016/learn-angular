import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-parent',
  templateUrl: './output-parent.component.html',
  styleUrls: ['./output-parent.component.css']
})
export class OutputParentComponent implements OnInit {

  value = 0;
  constructor() { }

  ngOnInit(): void {
  }

  // Đây là hàm chức năng mà tác động lên parent
  // Tuy nhiên parent không dùng, mà muốn 1 componet nào đó khác sử dụng
  changeValue(isAdd: boolean){
    if(isAdd){
      this.value = this.value +1;
    }
    else{
      this.value = this.value -1;
    }
  }

}
