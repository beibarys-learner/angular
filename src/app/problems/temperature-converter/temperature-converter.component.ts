import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Add this import


@Component({
  selector: 'app-temperature-converter',
  imports: [FormsModule],
  templateUrl: './temperature-converter.component.html',
  styleUrl: './temperature-converter.component.scss'
})
export class TemperatureConverterComponent {
          celsius: string = '';
          fahrenheit: string = '';


      format(number: number | string): string {
      return /\.\d{5}/.test(String(number))
        ? Number(number).toFixed(4)
        : String(number);
    }

    convert(
      value: string,
      setDestination: (val: string) => void,
      calculateValue: (val: number) => number
    ): void {
      const numericValue = Number(value);
      const isValid = !Number.isNaN(numericValue) && Boolean(value);
      setDestination(
        isValid ? this.format(calculateValue(numericValue)) : ''
      );
    }

    setCelsius(newValue: string) {
      this.celsius = newValue;
      this.convert(
        newValue,
        (val) => (this.fahrenheit = val),
        (value) => (value * 9) / 5 + 32
      );
    }

    setFahrenheit(newValue: string) {
      this.fahrenheit = newValue;
      this.convert(
        newValue,
        (val) => (this.celsius = val),
        (value) => ((value - 32) * 5) / 9
      );
    }

    reset() {
      this.celsius = '';
      this.fahrenheit = '';
    }
}
