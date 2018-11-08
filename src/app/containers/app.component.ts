import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hopla-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  ngOnInit() {
  }
}
