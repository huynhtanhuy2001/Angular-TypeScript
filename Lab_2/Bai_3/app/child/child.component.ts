import { Component, Input, OnInit } from '@angular/core';
import { Server } from '../app.server';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input('servers') server:any[] = [];
  constructor() {}
  ngOnInit(): void {}
}
