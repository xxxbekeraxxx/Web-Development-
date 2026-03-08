import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div style="max-width: 800px; margin: 2rem auto; padding: 0 1rem;">
      <h2>About</h2>
      <p>Student: Your Name</p>
      <p>Course: Web Development</p>
      <p>Lab 6: Routing & HTTP</p>
    </div>
  `
})
export class AboutComponent {}
