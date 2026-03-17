import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav style="background: #007bff; padding: 1rem;">
      <a routerLink="/home" routerLinkActive="active" style="color: white; margin-right: 1rem; text-decoration: none; padding: 0.5rem 1rem;">Home</a>
      <a routerLink="/about" routerLinkActive="active" style="color: white; margin-right: 1rem; text-decoration: none; padding: 0.5rem 1rem;">About</a>
      <a routerLink="/albums" routerLinkActive="active" style="color: white; margin-right: 1rem; text-decoration: none; padding: 0.5rem 1rem;">Albums</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .active { background: #0056b3; border-radius: 4px; }
  `]
})
export class AppComponent {
  title = 'album-browser';
}
