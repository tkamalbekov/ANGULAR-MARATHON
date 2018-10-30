import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  template: `
  
  <h2>Single Car</h2>
  
  
  `,
  //styleUrls: ['./car.component.css']
  styles: [`
  h2 {
	  
	  color: red;
  }
  
  
  `]
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
