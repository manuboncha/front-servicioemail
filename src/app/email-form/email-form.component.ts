import { Component } from '@angular/core';
import { Email, EmailService } from '../email.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.css',
})
export class EmailFormComponent {
  email: Email = {
    to: '',
    subject: '',
    body: '',
  };

  constructor(private emailService: EmailService) {}

  onSubmit() {
    this.emailService.sendEmail(this.email).subscribe(
      (response) => {
        console.log('Email sent successfully', response);
      },
      (error) => {
        console.error('Error sending email', error);
      }
    );
  }
}
