import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>{{ title }}</h2>
    <p>Directives are used to manipulate the DOM</p>
    <p>It uses an angular element similar to an html element "*ngFor=""</p>
    <ul>
      <li *ngFor="let course of courses">
        {{course}}
      </li>
    </ul>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'List of courses';
  courses = ['course1', 'course2', 'course3']
  
}
