import { Component } from '@angular/core';
import { Server } from './app.server';
import { ServerBlue } from './app.server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Bai2';
  severs: Server[] = [
    { name: 'Server 1', content: 'Sever s1', type: 'Sever' },
    { name: 'Server 2', content: 'Sever s2', type: 'SeverBlue' },
  ];
  severBlue: ServerBlue[] = [
    { name: 'Server 1', content: 'Sever s1', type: 'Sever' },
    { name: 'Server 2', content: 'Sever s2', type: 'SeverBlue' },
  ];
  addServer(name: string,content:string) {
    let s = new Server();
    s.name = name;
    s.content = content;
    this.severs.push(s);

  }
  addServerBlue(name: string,content:string) {
    let s = new ServerBlue();
    s.name = name;
    s.content = content;
    this.severs.push(s);

  }
}
