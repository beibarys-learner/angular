# 📖 HTTP Requests в Angular - Объяснение
HTTP запрос = отправка данных на сервер
Браузер → (POST запрос с данными) → Сервер
Браузер ← (Ответ: успех или ошибка) ← Сервер

1. HttpClient - это инструмент для запросов

```typescript
constructor(private http: HttpClient) {}
//                     ↑
//          Это как fetch() в JavaScript
```

```javascript
fetch('https://httpbin.org/post', {
  method: 'POST',
  body: JSON.stringify(data)
})
```

2. Метод .post()

```typescript
this.http.post(URL, DATA)
//        ↑     ↑    ↑
//     метод  куда  что
```

Параметры:

- URL - адрес сервера
- DATA - объект с данными (JavaScript объект, не строка!)

Пример:
```typescript
const url = 'https://httpbin.org/post';
const data = { name: 'John', age: 25 };

this.http.post(url, data)
```

3. Observable и .subscribe()
Проблема: HTTP запрос = асинхронный (занимает время)
Решение: Observable - это "обещание" получить данные позже


```bash

this.http.post(url, data)  // ← Возвращает Observable
  .subscribe()             // ← Подписываемся на результат

```
4. Обработка ответа

Observable = подписка на YouTube канал
```typescript
// Подписываешься на канал
youtubeChannel.subscribe({
  
  // Когда выходит видео
  next: (video) => {
    console.log('Новое видео!', video);
  },
  
  // Если канал удален
  error: (error) => {
    console.log('Канал недоступен');
  }
});

```

```typescript
import { HttpClient } from '@angular/common/http';

export class MyComponent {
  constructor(private http: HttpClient) {}

  sendData() {
    // 1. Подготовь данные
    const myData = {
      username: 'Alex',
      email: 'alex@example.com'
    };

    // 2. Укажи URL
    const url = 'https://httpbin.org/post';

    // 3. Отправь POST запрос
    this.http.post(url, myData).subscribe({
      
      // 4a. Если успешно (200)
      next: (response) => {
        console.log('Сервер ответил:', response);
        // Здесь обновляешь UI, показываешь сообщение и т.д.
      },

      // 4b. Если ошибка (400, 500...)
      error: (error) => {
        console.log('Ошибка:', error.status);
        // Здесь показываешь ошибку пользователю
      }
    });
  }
}
```

## Документация:

📖 https://angular.dev/guide/http/making-requests
📖 https://angular.dev/guide/http/setup
📖 https://rxjs.dev/guide/observable (что такое Observable)