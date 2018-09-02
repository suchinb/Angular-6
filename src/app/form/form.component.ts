import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
