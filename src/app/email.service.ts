import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Email {
  id?: number;
  to: string;
  subject: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private baseUrl = 'http://localhost:8000/api/v1/emails';

  constructor(private http: HttpClient) {}

  sendEmail(email: Email): Observable<any> {
    return this.http.post(`${this.baseUrl}/send`, email);
  }

  getEmails(): Observable<Email[]> {
    return this.http.get<Email[]>(this.baseUrl);
  }
}
