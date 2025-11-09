import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-generate-table2',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './generate-table2.component.html',
  styleUrl: './generate-table2.component.scss'
})
export class GenerateTable2Component {
    tableForm: FormGroup;
    tableData: number[][] = [];

    // i don't know how to use constructors
    constructor(private fb: FormBuilder) {
      this.tableForm = this.fb.group({
        rows: [3, [Validators.required, Validators.min(1)]], 
        columns: [3, [Validators.required, Validators.min(1)]]
      })
    }

    // form submission
    onSubmit(): void {
      if (this.tableForm.valid) {
        const rows = this.tableForm.value.rows;
        const columns = this.tableForm.value.columns;
        this.generateTable(rows, columns);
      }
    }

    generateTable(rows: number, columns: number) {
      this.tableData = [];
      let counter = 1;
      for (let i = 0; i < rows; i++) {
        const row: number[] = [];
        for (let j = 0; j < columns; j++) {
          row.push(counter++);
        }
        this.tableData.push(row);
      }
    }

    


}
