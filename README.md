## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Khỏi tạo project:

```bash
ng new input-data-binding
```

tạo mới component
ng g c user-form

tải boostrap : yarn add bootstrap jquery
sau đó thêm path ở angular.json
"styles": [
"src/styles.css",
"./node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
"./node_modules/jquery/dist/jquery.min.js",
"./node_modules/bootstrap/dist/js/bootstrap.min.js"
]

### Muốn truyền input ở thẻ thì phải Import Input

### HttpModule không còn hỗ trợ từ angular 5 trở lên nữa

thay vì đó dùng import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'
https://stackoverflow.com/questions/38510369/cannot-find-module-angular-http
