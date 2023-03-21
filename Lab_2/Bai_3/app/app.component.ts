import { Component,Input,OnInit } from '@angular/core';
import { Server } from './app.server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bai3';
  servers: Server[] = [];

  addServer(name:string,content:string){
    let s =new Server();
    s.name = name;
    s.content = content;
    s.type="Server";
    this.servers.push(s);
  }
  addServerBlue(name:string,content:string){
    let s =new Server();
    s.name = name;
    s.content = content;
    s.type="ServerBlue";
    this.servers.push(s);
  }

}
