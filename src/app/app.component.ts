import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  navLinks = [
    {
      path: '/home',
      label: 'Home'
    },
    {
      path: '/login',
      label: 'Login'
    }
  ]
}
