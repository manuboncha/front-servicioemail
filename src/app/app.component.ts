import { Component } from '@angular/core';
import { EmailFormComponent } from './email-form/email-form.component';
import { EmailTableComponent } from './email-table/email-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmailFormComponent, EmailTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'email-spa';
}
