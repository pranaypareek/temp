import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container-fluid">
      <nav>
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        <a routerLink="/tasks" routerLinkActive="active">Tasks</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
  title = 'Task Exec λ';
}
