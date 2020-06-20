import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-first',
  templateUrl: './demo-first.component.html',
  styleUrls: ['./demo-first.component.scss']
})
export class DemoFirstComponent implements OnInit {

  name = 'Hello World 1 !!!!';

  isWorking = true;

  age = 12;

  constructor() { }

  ngOnInit(): void {
  }

}
