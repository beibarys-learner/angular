import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-temperature-reactive',
  imports: [],
  templateUrl: './temperature-reactive.component.html',
  styleUrl: './temperature-reactive.component.scss'
})
export class TemperatureReactiveComponent implements OnInit{
 temperatureForm = new FormGroup({
    celsius: new FormControl<string>(''),
    fahrenheit: new FormControl<string>('')
  });

  // Getters for cleaner access to form controls
  get celsiusControl(): FormControl<string | null> {
    return this.temperatureForm.get('celsius') as FormControl<string | null>;
  }

  get fahrenheitControl(): FormControl<string | null> {
    return this.temperatureForm.get('fahrenheit') as FormControl<string | null>;
  }
  
  ngOnInit(): void {
    // Subscribe to celsius changes
    this.celsiusControl.valueChanges.subscribe(value => {
      if (!this.celsiusControl.pristine) {
        this.convertCelsiusToFahrenheit(value || '');
      }
    });
    
    // Subscribe to fahrenheit changes
    this.fahrenheitControl.valueChanges.subscribe(value => {
      if (!this.fahrenheitControl.pristine) {
        this.convertFahrenheitToCelsius(value || '');
      }
    });
  }
  
  convertCelsiusToFahrenheit(celsius: string): void {
    // Skip if currently updating this control from the other
    if (this.fahrenheitControl.dirty) return;
    
    const numericValue = Number(celsius);
    
    if (!Number.isNaN(numericValue) && celsius !== '') {
      const fahrenheit = (numericValue * 9) / 5 + 32;
      this.fahrenheitControl.setValue(
        this.format(fahrenheit), 
        { emitEvent: false }
      );
    } else {
      this.fahrenheitControl.setValue('', { emitEvent: false });
    }
  }
  
  convertFahrenheitToCelsius(fahrenheit: string): void {
    // Skip if currently updating this control from the other
    if (this.celsiusControl.dirty) return;
    
    const numericValue = Number(fahrenheit);
    
    if (!Number.isNaN(numericValue) && fahrenheit !== '') {
      const celsius = ((numericValue - 32) * 5) / 9;
      this.celsiusControl.setValue(
        this.format(celsius), 
        { emitEvent: false }
      );
    } else {
      this.celsiusControl.setValue('', { emitEvent: false });
    }
  }
  
  format(number: number | string): string {
    return /\.\d{5}/.test(String(number))
      ? Number(number).toFixed(4)
      : String(number);
  }

}
