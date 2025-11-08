# Flight Booker - Что я изучил

Резюме знаний, полученных при создании компонента Flight Booker.

---

## 🎯 Пройденные темы

### 1. Reactive Forms (Реактивные формы)

**Что изучил:**
- ✅ `ReactiveFormsModule` - импорт для работы с формами
- ✅ `FormBuilder` - создание форм программно
- ✅ `FormGroup` - группировка полей формы
- ✅ `Validators` - валидация полей

**Практика:**
```typescript
this.flightForm = this.fb.group({
  flightType: ['one-way'],              // значение по умолчанию
  departureDate: ['', Validators.required],  // обязательное поле
  returnDate: ['']                      // опциональное поле
});
```

**Что понял:**
- Формы создаются в конструкторе
- Каждое поле имеет начальное значение
- Можно добавить валидаторы

**Документация:**
- https://angular.dev/guide/forms/reactive-forms

---

### 2. Form Binding (Привязка формы)

**Что изучил:**
- ✅ `[formGroup]` - связь формы с шаблоном
- ✅ `formControlName` - связь поля с FormControl
- ✅ `(ngSubmit)` - обработка отправки формы

**Практика:**
```html
<form [formGroup]="flightForm" (ngSubmit)="onSubmit()">
  <select formControlName="flightType">
    <option value="one-way">One-way</option>
  </select>
  
  <input type="date" formControlName="departureDate">
</form>
```

**Что понял:**
- `[formGroup]` связывает HTML форму с TypeScript объектом
- `formControlName` должен совпадать с именем в `fb.group()`
- `(ngSubmit)` срабатывает при submit формы

---

### 3. Conditional Rendering (*ngIf)

**Что изучил:**
- ✅ `*ngIf` для показа/скрытия элементов
- ✅ Динамическое изменение UI на основе данных

**Практика:**
```html
<input type="date" formControlName="returnDate" *ngIf="isRoundTrip()">
```
```typescript
isRoundTrip(): boolean {
  return this.flightForm.get('flightType')?.value === 'round-trip';
}
```

**Что понял:**
- `*ngIf` полностью удаляет элемент из DOM если `false`
- Можно вызывать методы в `*ngIf`
- Нужен `CommonModule` для использования `*ngIf`

---

### 4. Form Access (Доступ к данным формы)

**Что изучил:**
- ✅ `.get('fieldName')` - получить FormControl
- ✅ `?.value` - получить значение поля
- ✅ Optional chaining `?.` для безопасности

**Практика:**
```typescript
const flightType = this.flightForm.get('flightType')?.value;
const departureDate = this.flightForm.get('departureDate')?.value;
```

**Что понял:**
- `.get()` возвращает FormControl или null
- `?.` защищает от ошибок если поле не найдено
- `.value` содержит текущее значение поля

---

### 5. Custom Validation (Кастомная валидация)

**Что изучил:**
- ✅ Написание собственной логики валидации
- ✅ Проверка дат
- ✅ Сравнение значений полей

**Практика:**
```typescript
// Проверка: дата в прошлом?
isDateInPast(dateString: string): boolean {
  const selectedDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selectedDate < today;
}

// Использование
if (this.isDateInPast(departureDate)) {
  this.errorMessage = 'Date cannot be in the past';
  return;
}
```

**Что понял:**
- Валидация может быть в методе `onSubmit()`
- `new Date()` создает объект даты
- `.setHours(0,0,0,0)` сбрасывает время для сравнения только дат
- Можно сравнивать даты операторами `<`, `>`

---

### 6. Conditional Logic (Условная логика)

**Что изучил:**
- ✅ `if/else` для разных сценариев
- ✅ Проверка нескольких условий
- ✅ Early return pattern

**Практика:**
```typescript
onSubmit() {
  // Early return при ошибке
  if (!departureDate) {
    this.errorMessage = 'Required';
    return;  // Останавливаем выполнение
  }
  
  // Разная логика для round-trip
  if (this.isRoundTrip()) {
    // дополнительные проверки
  }
  
  // Success в конце
  this.successMessage = '...';
}
```

**Что понял:**
- Early return делает код чище
- Проверки идут сверху вниз
- Success логика в самом конце

---

### 7. Date Handling (Работа с датами)

**Что изучил:**
- ✅ `<input type="date">` в HTML5
- ✅ Формат даты: YYYY-MM-DD
- ✅ `new Date()` в JavaScript/TypeScript
- ✅ Сравнение дат

**Практика:**
```typescript
// Получить текущую дату
const today = new Date();

// Сбросить время (только дата)
today.setHours(0, 0, 0, 0);

// Создать дату из строки
const selectedDate = new Date('2025-11-09');

// Сравнить
if (selectedDate < today) { /* прошлое */ }
if (returnDate < departureDate) { /* ошибка */ }
```

**Что понял:**
- `<input type="date">` дает строку в формате YYYY-MM-DD
- `new Date()` может принимать строку
- Даты можно сравнивать как числа
- Важно сбросить время для корректного сравнения

---

### 8. User Feedback (Обратная связь)

**Что изучил:**
- ✅ Отображение success сообщений
- ✅ Отображение error сообщений
- ✅ Очистка сообщений перед новой валидацией

**Практика:**
```typescript
successMessage = '';
errorMessage = '';

onSubmit() {
  // Очистить предыдущие сообщения
  this.successMessage = '';
  this.errorMessage = '';
  
  // Показать ошибку
  if (error) {
    this.errorMessage = 'Error text';
    return;
  }
  
  // Показать успех
  this.successMessage = 'Success text';
}
```
```html
<div *ngIf="successMessage">{{ successMessage }}</div>
<div *ngIf="errorMessage">{{ errorMessage }}</div>
```

**Что понял:**
- Сообщения - это просто строковые переменные
- Очищаем в начале `onSubmit()`
- `*ngIf` показывает только если строка не пустая

---

### 9. Template String Interpolation

**Что изучил:**
- ✅ Template literals с `${}`
- ✅ Вставка переменных в строки

**Практика:**
```typescript
this.successMessage = `You have booked a one-way flight on ${departureDate}`;

// Многострочный
this.successMessage = `You have booked a round-trip flight, 
  departing on ${departureDate} 
  and returning on ${returnDate}`;
```

**Что понял:**
- Backticks `` ` `` вместо кавычек
- `${}` для вставки переменных
- Можно использовать многострочные строки

---

## 🎓 Ключевые концепции

### FormBuilder Pattern
```typescript
constructor(private fb: FormBuilder) {
  this.flightForm = this.fb.group({...});
}
```
**Зачем:** Удобное создание форм

### Reactive Forms Flow
```
User Input → FormControl → Component Property → Validation → UI Update
```

### Validation Strategy
```
1. Проверить обязательные поля
2. Проверить формат данных
3. Проверить бизнес-логику (даты)
4. Показать результат
```

---

## 💡 Что я понял

### 1. Reactive Forms vs Template Forms
- **Reactive Forms** = контроль в TypeScript
- Лучше для сложной валидации
- Более тестируемые

### 2. Когда использовать *ngIf
- Показ/скрытие элементов
- Условный рендеринг
- Динамический UI

### 3. Работа с датами
- HTML5 date input удобен
- Важно правильно сравнивать даты
- Формат YYYY-MM-DD стандартный

### 4. Валидация
- Делать в `onSubmit()`
- Early return для ошибок
- Показывать понятные сообщения

---

## 📊 Прогресс навыков

| Навык | До проекта | После проекта |
|-------|------------|---------------|
| Reactive Forms | ❌ | ✅ |
| FormBuilder | ❌ | ✅ |
| Custom Validation | ❌ | ✅ |
| Date Handling | ⚠️ | ✅ |
| Conditional Logic | ⚠️ | ✅ |
| *ngIf | ✅ | ✅✅ |

---

## 🔄 Что можно улучшить

### Идеи для развития:
- [ ] Добавить выбор класса (Economy, Business, First)
- [ ] Добавить количество пассажиров
- [ ] Добавить выбор аэропортов
- [ ] Сохранять данные в LocalStorage
- [ ] Добавить календарь вместо input type="date"
- [ ] Показывать цену билета
- [ ] История бронирований

### Технические улучшения:
- [ ] Custom Validators вместо проверок в onSubmit
- [ ] Async validation
- [ ] Показывать ошибки под каждым полем
- [ ] Disabled состояние кнопки при невалидной форме
- [ ] Анимации для сообщений

---

## 📚 Полезные ссылки

**Изученные темы:**
- Reactive Forms: https://angular.dev/guide/forms/reactive-forms
- Form Validation: https://angular.dev/guide/forms/form-validation
- FormBuilder API: https://angular.dev/api/forms/FormBuilder
- Date Input: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date

**Следующие шаги:**
- Custom Validators: https://angular.dev/guide/forms/form-validation#defining-custom-validators
- Async Validators: https://angular.dev/guide/forms/form-validation#asynchronous-validation

---

## ✅ Чеклист знаний

После этого проекта я умею:

- [x] Создавать Reactive Forms
- [x] Использовать FormBuilder
- [x] Связывать форму с шаблоном
- [x] Получать значения из формы
- [x] Делать кастомную валидацию
- [x] Работать с датами в TypeScript
- [x] Использовать *ngIf для условий
- [x] Показывать сообщения пользователю
- [x] Использовать template literals
- [x] Применять Early return pattern

---

**Дата завершения:** 2025-01-08  
**Время на изучение:** ~2 часа  
**Сложность:** ⭐⭐⭐ (3/5)