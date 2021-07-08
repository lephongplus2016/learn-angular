// khai báo thư viện
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.css']
})
export class OutputChildComponent implements OnInit {

  // child không biết gì cả, nó chỉ biết nó nhận 1 hàm là XuLyValueCuaCha của parent truyền vô cho nó
  @Output() XuLyValueCuaCha = new EventEmitter<boolean>();
  // Hàm này là 1 kiểu eventemitter nhận vào boolean
  constructor() { }

  ngOnInit(): void {
  }

  // Các hàm này là hàm của child
  // Tuy nhiên chỉ dùng để gọi emit hàm của cha để hàm của cha chạy mà thôi
  // Quả thật child chỉ gọi mà không biết nội dung XuLyValueCuaCha là gì?
  // Nhưng thông qua emit, nó thay đổi tác động ngược lại parent 
  AddForParent(){
    this.XuLyValueCuaCha.emit(true)
    }
    
  SubForParent(){
    this.XuLyValueCuaCha.emit(false);
  }  
}
