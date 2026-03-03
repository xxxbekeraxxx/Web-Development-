import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div>
      <h1>Album Browser</h1>
      <p>Browse albums from JSONPlaceholder API</p>
      <a routerLink="/albums">Browse Albums</a>
    </div>
  `,
  styles: [`
    div { text-align: center; margin-top: 50px; }
    a { padding: 10px 20px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; }
  `]
})
export class HomeComponent {}
