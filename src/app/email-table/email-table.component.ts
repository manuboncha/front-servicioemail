import { Component } from '@angular/core';
import { Email, EmailService } from '../email.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './email-table.component.html',
  styleUrl: './email-table.component.css',
})
export class EmailTableComponent {
  emails: Email[] = [];

  constructor(private emailService: EmailService) {}

  ngOnInit() {
    this.emailService.getEmails().subscribe(
      (data) => {
        this.emails = data;
      },
      (error) => {
        console.error('Error fetching emails', error);
      }
    );
  }
}
