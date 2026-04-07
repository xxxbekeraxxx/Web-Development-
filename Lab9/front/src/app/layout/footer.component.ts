import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <p>© 2026 Online Shop. Contact: support&#64;onlineshop.example</p>
    </footer>
  `,
  styles: ['.footer { margin-top:2rem; padding:1rem; text-align:center; border-top:1px solid #e5e7eb; color:#6b7280; }']
})
export class FooterComponent {}
