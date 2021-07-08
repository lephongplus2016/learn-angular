import { Component, OnInit } from '@angular/core';

@Component({
  // là thẻ mới tạo  -> gọi componentS
  selector: 'app-words',
  //giá trị của view của component
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})

// export là nơi các biến, các mảng được đẩy từ typescript sang html(view)
export class WordsComponent implements OnInit {

   arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true },
    { id: 7, en: 'schedule', vn: 'lịch trình', memorized: false },
    { id: 8, en: 'person', vn: 'một người', memorized: false }
];
  isShowForm = false;

  filterStatus = 'XEM_TAT_CA';

  wordInEn = '';
  wordInVn = '';
  xemTatCa = false;
  xemTuDaHoc = false;
  xemTuChuaHoc = false;
  addWord(){
    if(this.wordInEn == '' || this.wordInVn == '') {
       console.log('Invalid input');
    }
    else {
      this.arrWords.unshift({
        id: this.arrWords.length +1,
        en: this.wordInEn,
        vn: this.wordInVn,
        memorized: false
      })
      this.wordInEn = '';
      this.wordInVn = '';
      this.isShowForm = false;
    }

    
  }

  // link thí chủ để ở đây nhớ
  removeWord(id:number){
    // hàm splice này sẽ xóa 1 phần tử kể từ phần tử có index là index
    this.arrWords.forEach((value,index)=>{
      if(value.id==id) this.arrWords.splice(index,1);
  });
  }

    filter(memorized:boolean) {
      this.xemTatCa = this.filterStatus === 'XEM_TAT_CA';
      this.xemTuDaHoc = this.filterStatus === 'XEM_TU_DA_HOC' && memorized== true;
      this.xemTuChuaHoc = this.filterStatus ==='XEM_TU_CHUA_HOC' && memorized ==false;
      return this.xemTatCa || this.xemTuDaHoc ||this.xemTuChuaHoc;
    }

  constructor() { }

  ngOnInit(): void {
  }

}
