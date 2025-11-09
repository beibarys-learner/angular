import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-flight-booker',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './flight-booker.component.html',
  styleUrl: './flight-booker.component.scss'
})

export class FlightBookerComponent {

  flightForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder){
    this.flightForm = this.fb.group({
      flightType: ['one-way'],
      departureDate: ['', Validators.required],
      returnDate: ['']
    });
  }
  
  isRoundTrip(): boolean {
    return this.flightForm.get('flightType')?.value === 'round-trip';
  }

  isDateInPast(dateString: string): boolean {
    const selectedDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate < today;
  }

  onSubmit() {
    this.successMessage = '';
    this.errorMessage = '';

    const flightType = this.flightForm.get('flightType')?.value;
    const departureDate = this.flightForm.get('departureDate')?.value;
    const returnDate = this.flightForm.get('returnDate')?.value;

      // Проверка 1: departureDate пустая?
    if (!departureDate) {
      this.errorMessage = 'Departure date is required';
      return;
    }

    // Проверка 2: departureDate в прошлом?
    if (this.isDateInPast(departureDate)) {
      this.errorMessage = 'Departure date cannot be in the past';
      return;
    }

    // Проверка 3: Если round-trip
    if (this.isRoundTrip()) {
      // 3a. returnDate не пустая?
      if (!returnDate) {
        this.errorMessage = 'Return date is required';
        return;
      }

      // 3b. returnDate в прошлом?
      if (this.isDateInPast(returnDate)) {
        this.errorMessage = 'Return date cannot be in the past';
        return;
      }

      // 3c. returnDate >= departureDate?
      if (returnDate < departureDate) {
        this.errorMessage = 'Return date must be after departure date';
        return;
      }
    }

    if (this.isRoundTrip()) {
      this.successMessage = `You have booked a round-trip flight, departing on ${departureDate} and returning on ${returnDate}`;
    } else {
      this.successMessage = `You have booked a one-way flight on ${departureDate}`;
    }

    // TODO: 
    // 1. Проверь departureDate не пустая
    // 2. Проверь departureDate не в прошлом
    // 3. Если round-trip:
    //    - Проверь returnDate не пустая
    //    - Проверь returnDate не в прошлом  
    //    - Проверь returnDate >= departureDate
    // 4. Если всё OK - создай successMessage  
  }
}
