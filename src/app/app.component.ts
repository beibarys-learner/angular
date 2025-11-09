import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive // This is needed for routerLinkActiveOptions
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sdf-angular';


  constructor(public router: Router) {}

  // Проверяем, нужно ли показывать navbar
  shouldShowNavbar(): boolean {
    return this.router.url !== '/holy-grail';
  }
}