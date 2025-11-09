# Angular Reactive Forms - Interview Study Guide

## 📋 Quick Overview

**Task:** Build a form to generate a table with user-specified rows and columns, displaying sequential numbers 1 to (rows × columns).

**Key Technology:** Angular Reactive Forms (ReactiveFormsModule)

---

## 🎯 Essential Concepts to Know

### 1. Reactive Forms Basics

#### What are Reactive Forms?
- Model-driven approach to forms
- Form structure defined in component class (TypeScript)
- Better control, testability, and scalability
- One-way data flow

#### Required Import
```typescript
import { ReactiveFormsModule } from '@angular/forms';
```

#### Core Classes
- `FormGroup` - Container for form controls
- `FormControl` - Individual form field
- `FormBuilder` - Service for creating forms (cleaner syntax)
- `Validators` - Built-in validation functions

---

### 2. Form Structure Pattern

```typescript
// In Component:
tableForm: FormGroup;

constructor(private fb: FormBuilder) {
  this.tableForm = this.fb.group({
    rows: [3, [Validators.required, Validators.min(1)]],
    columns: [3, [Validators.required, Validators.min(1)]]
  });
}

// Format: [defaultValue, [validators]]
```

---

### 3. Template Binding

```html
<!-- Bind FormGroup to form -->
<form [formGroup]="tableForm" (ngSubmit)="onSubmit()">
  
  <!-- Link input to FormControl -->
  <input type="number" formControlName="rows" />
  
  <!-- Disable button when invalid -->
  <button [disabled]="tableForm.invalid">Submit</button>
</form>
```

**Key Directives:**
- `[formGroup]="tableForm"` - Binds FormGroup
- `formControlName="rows"` - Links control
- `(ngSubmit)="onSubmit()"` - Submit handler

---

### 4. Accessing Form Values

```typescript
onSubmit(): void {
  if (this.tableForm.valid) {
    // Method 1: Direct access
    const rows = this.tableForm.value.rows;
    
    // Method 2: Destructuring
    const { rows, columns } = this.tableForm.value;
    
    // Method 3: Get specific control
    const rows = this.tableForm.get('rows').value;
  }
}
```

---

## 🆚 Reactive vs Template-Driven Forms

| Aspect | Reactive Forms | Template-Driven Forms |
|--------|---------------|---------------------|
| **Module** | `ReactiveFormsModule` | `FormsModule` |
| **Created In** | Component (TS) | Template (HTML) |
| **Syntax** | `[formGroup]`, `formControlName` | `[(ngModel)]` |
| **Validation** | In component class | In template attributes |
| **Data Flow** | Synchronous | Asynchronous |
| **Testability** | Easy | Harder |
| **Best For** | Complex/Dynamic forms | Simple forms |

### Side-by-Side Example

**Reactive:**
```typescript
// Component
tableForm = this.fb.group({
  rows: [3, Validators.required]
});

// Template
<input formControlName="rows" />
```

**Template-Driven:**
```typescript
// Component
rows: number = 3;

// Template
<input [(ngModel)]="rows" name="rows" required />
```

---

## ✅ Validation

### Built-in Validators
```typescript
Validators.required       // Field is required
Validators.min(1)        // Minimum value
Validators.max(100)      // Maximum value
Validators.minLength(3)  // Min string length
Validators.maxLength(10) // Max string length
Validators.pattern(/\d+/) // Regex pattern
```

### Checking Validity
```typescript
this.tableForm.valid      // Form is valid
this.tableForm.invalid    // Form is invalid
this.tableForm.get('rows').errors  // Get errors
this.tableForm.get('rows').hasError('required')  // Specific error
```

---

## 🔧 Common Operations

### Setting Values
```typescript
// Update some fields (others unchanged)
this.tableForm.patchValue({ rows: 5 });

// Set all fields (must include all)
this.tableForm.setValue({ rows: 5, columns: 5 });
```

### Reset Form
```typescript
this.tableForm.reset();  // Clear all
this.tableForm.reset({ rows: 3, columns: 3 });  // With defaults
```

### Enable/Disable
```typescript
this.tableForm.get('rows').disable();
this.tableForm.get('rows').enable();
```

### Listen to Changes
```typescript
this.tableForm.valueChanges.subscribe(value => {
  console.log(value);
});
```

---

## 🚫 Common Mistakes

### ❌ Wrong
```typescript
// Forgetting to import ReactiveFormsModule
// Mixing [(ngModel)] with formControlName
<input [(ngModel)]="rows" formControlName="rows" />

// Not checking validity
onSubmit() { 
  this.generateTable(this.form.value.rows); 
}
```

### ✅ Correct
```typescript
// Import ReactiveFormsModule in module
// Use only formControlName
<input formControlName="rows" />

// Always check validity
onSubmit() {
  if (this.form.valid) {
    this.generateTable(this.form.value.rows);
  }
}
```

---

## 💡 Interview Questions & Answers

### Q: What's the main difference between Reactive and Template-driven forms?
**A:** Reactive forms are model-driven (created in TypeScript component), while Template-driven forms are template-driven (created in HTML with directives). Reactive forms provide better control, testability, and are better for complex scenarios.

### Q: Why use Reactive Forms over Template-driven?
**A:** 
- Better control over form logic
- Easier to test (no DOM needed)
- Better for complex validation
- Synchronous data flow
- Better scalability

### Q: When would you use Template-driven forms?
**A:** For simple forms with basic validation, rapid prototyping, or when the form structure is very straightforward.

### Q: How do you add custom validation?
**A:**
```typescript
function positiveNumber(control: AbstractControl) {
  return control.value > 0 ? null : { notPositive: true };
}

// Use in form:
this.fb.group({
  rows: [0, [Validators.required, positiveNumber]]
});
```

### Q: What is FormBuilder?
**A:** A service that provides syntactic sugar for creating FormGroup and FormControl instances with cleaner syntax.

### Q: How do you handle dynamic form fields?
**A:** Use `FormArray` to dynamically add or remove form controls at runtime.

---

## 📁 File Structure

```
src/app/
├── table-generator/
│   ├── table-generator.component.ts    ← Component class
│   ├── table-generator.component.html  ← Template
│   └── table-generator.component.spec.ts
└── app.module.ts
```

### Connecting TS and HTML
```typescript
@Component({
  selector: 'app-table-generator',
  templateUrl: './table-generator.component.html'  // External
  // OR
  template: `<div>...</div>`  // Inline
})
```

**When to use external vs inline:**
- **External:** Larger templates, better IDE support, team projects
- **Inline:** Small components (<10 lines HTML), quick prototypes

---

## 🎓 Study Checklist

- [ ] Understand FormGroup, FormControl, FormBuilder
- [ ] Know how to bind forms in template
- [ ] Remember validation syntax
- [ ] Explain Reactive vs Template-driven differences
- [ ] Know when to use each approach
- [ ] Understand form value access patterns
- [ ] Remember common mistakes to avoid
- [ ] Practice explaining code structure
- [ ] Be ready to discuss validation strategies
- [ ] Know how to test reactive forms

---

## 🔑 Key Takeaways

1. **ReactiveFormsModule is required** - Must import in module
2. **FormBuilder makes life easier** - Use `fb.group()` syntax
3. **Always check validity** - Use `if (this.form.valid)`
4. **One-way binding** - `[formGroup]` + `formControlName`
5. **Validators in TS** - Not in template
6. **Better testing** - No DOM manipulation needed
7. **Scalable** - Great for complex forms

---

## 🚀 Quick Code Template

```typescript
// Component
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class MyComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      fieldName: ['default', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      const value = this.myForm.value.fieldName;
      // Process data
    }
  }
}
```

```html
<!-- Template -->
<form [formGroup]="myForm" (ngSubmit)="onSubmit()">
  <input formControlName="fieldName" />
  <button [disabled]="myForm.invalid">Submit</button>
</form>
```

---

## 📚 Additional Resources

- Angular Reactive Forms Documentation
- FormArray for dynamic controls
- Custom validators
- Async validators
- Cross-field validation
- Form state management (pristine, dirty, touched)

---

**Good luck with your interview! 🎯**
