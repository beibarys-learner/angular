import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './api';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html', // <-- твой HTML-файл
  styleUrls: ['./contact.component.scss'] // <-- необязательно
})
export class ContactComponent {
  // данные формы
  formData = {
    name: '',
    email: '',
    message: ''
  };

  // состояния
  isLoading = false;
  successMessage = '';
  errorMessage = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    // показать загрузку и сбросить предыдущие сообщения
    this.isLoading = true;
    this.successMessage = '';
    this.errorMessage = '';

    // отправка POST-запроса
    // this.http.post(`${API_URL}/post`, this.formData).subscribe({
    //   next: (response) => {
    //     console.log('Response:', response);
    //     this.successMessage = '✅ Message sent successfully!';
    //     this.isLoading = false;
    //     // очистить форму
    //     this.formData = { name: '', email: '', message: '' };
    //   },
    //   error: (error) => {
    //     console.error('Error:', error);
    //     this.errorMessage = `❌ Error: ${error.status} - ${error.message}`;
    //     this.isLoading = false;
    //   }
    // });

    this.http.post(`${API_URL}/post`, this.formData).subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (error) => {
        console.log(error.status)
      }
    });
  }
}
