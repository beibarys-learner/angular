3) Interview talking points — main differences & why reactive forms

Use these concise bullets during UI coding interview to show understanding.

Reactive forms (this example)

Programmatic: form model defined in component code (FormGroup, FormControl, FormBuilder).

Predictable & synchronous access to form value and validation state (this.form.value, this.form.status).

Better for complex forms, dynamic controls (add/remove controls at runtime), and unit testing.

Validation logic colocated with model; easier to share validators and compose them.

Works well with RxJS (valueChanges, statusChanges) for reactive UI updates.

Scales better for large/enterprise apps.

Template-driven forms

Declarative: use directives in the template (ngModel, ngModelGroup).

Simpler for small/simple forms; less boilerplate.

Form model is created by Angular under the hood — harder to access and test programmatically.

Validation defined in template; mixing logic in template can be less maintainable for complex use-cases.

Performance & testing

Reactive forms give you explicit control; easier to unit test (you can instantiate FormGroup in tests and validate behaviour).

Template-driven can be slower to test because they rely on Angular's template synthesis and ngModel.

When to choose which

Use reactive forms for: complex validation, dynamic forms, enterprise apps, testability.

Use template-driven for: simple forms in small apps or quick prototypes.

4) Possible follow-ups interviewers might ask (and short answers)

Q: How to add custom validator? — Implement ValidatorFn and attach at control or group level.

Q: How to dynamically add/remove columns or rows? — Use FormArray (reactive) representing rows and inside each row another FormArray for cells; then push/pop controls as needed.

Q: How to prevent extremely large inputs? — Add validators (min/max) and possibly throttle valueChanges. Validate also before heavy computations.

Q: Why not use two-way binding? — Reactive approach avoids template-driven two-way-binding pitfalls; gives centralized control & easier testing.

5) Extra tips for the live coding interview

Keep code minimal and readable. Explain each step out loud: "I define the form, validate it, then build a simple data structure for the template."

Mention edge cases: non-integer inputs, zero or negative numbers, too large sizes (memory).

If asked to style later, suggest using CSS grid or table CSS — but focus on behavior first.

If asked about accessibility: add labels, aria attributes, ensure focus management after table creation.