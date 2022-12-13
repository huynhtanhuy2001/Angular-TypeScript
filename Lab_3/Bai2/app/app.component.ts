import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Bai4';
  ngaythu = -1;
  displayvalu = '';
  getvalue(value: string) {
    this.displayvalu = value;

    this.listDate.push(value);
    console.log(this.listDate);
  }

  listDate: Array<any> = new Array<any>();
  ngOnInit() {
    this.listDate = [];
  }
}

