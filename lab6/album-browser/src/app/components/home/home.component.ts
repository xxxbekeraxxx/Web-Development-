import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div style="text-align: center; margin-top: 50px;">
      <h1>Album Browser</h1>
      <p>Browse albums from JSONPlaceholder API</p>
      <a routerLink="/albums" style="padding: 10px 20px; background: #007bff; color: white; text-decoration: none; border-radius: 4px;">Browse Albums</a>
    </div>
  `
})
export class HomeComponent {}
