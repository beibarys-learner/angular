import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-generate-table',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './generate-table.component.html',
  styleUrl: './generate-table.component.scss'
})
export class GenerateTableComponent {
tableForm: FormGroup;
  tableData: number[][] = [];
  showTable: boolean = false;

  constructor(private fb: FormBuilder) {
    this.tableForm = this.fb.group({
      rows: ['', [Validators.required, Validators.min(1), Validators.max(20)]],
      columns: ['', [Validators.required, Validators.min(1), Validators.max(20)]]
    });
  }

  generateTable(): void {
    if (this.tableForm.valid) {
      const rows = this.tableForm.value.rows;
      const columns = this.tableForm.value.columns;
      
      this.tableData = [];
      let counter = 1;

      for (let i = 0; i < rows; i++) {
        const row: number[] = [];
        for (let j = 0; j < columns; j++) {
          row.push(counter);
          counter++;
        }
        this.tableData.push(row);
      }

      this.showTable = true;
    }
  }

  resetTable(): void {
    this.tableForm.reset();
    this.tableData = [];
    this.showTable = false;
  }
}
