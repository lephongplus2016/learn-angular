// ---- CARD COMPONENT ----

import { Component } from '@angular/core';

@Component({
    selector: 'app-card',
    // Câu hỏi đặt ra là : card này có nhu cầu tái sử dụng rất lớn.
    // Vấn đề là không phải lúc nào cái nội dung truyền vào cho card cũng 
    //đơn giản là biến để dùng output.
    // LÀm sao truyền vào cả <p></p>, hay 1 đoạn bootstrap ,...
    // => ngContent
    template: `
        <div class="card">
            <div class='header'>
                <ng-content select='.card-header'></ng-content>
            </div>
            <div class='body'>
                <ng-content select='.card-body'></ng-content>
            </div>
        </div>
    `,
    // syntax gọi thẻ
//     <app-card>
//     <h3 class = 'card-header'>bán hàng</h3>
//     <p class ='card-body'>đa cấp</p>
// </app-card>
    styles: [`
        .card {
            padding: 5px;
            margin: 5px;
            background: #fff;
            border-radius: 2px;
            display: inline-block;
            width: 300px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        }
    `]
})

export class CardComponent {}


// ---- CARD COMPONENT ----