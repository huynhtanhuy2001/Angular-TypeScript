import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'newblog';
  public home: string = 'active';
  public checkLink: number = 1;
  public checkActive(event: any) {
    if (event.target.outerText == 'Home') {
      this.checkLink = 1;
    } else if (event.target.outerText == 'Blog detail') {
      this.checkLink = 2;
    } else if (event.target.outerText == 'Contact ') {
      this.checkLink = 3;
    }
  }
}
