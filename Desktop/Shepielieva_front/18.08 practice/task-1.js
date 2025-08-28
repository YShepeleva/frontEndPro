const ordersCount = orders.reduce((acc, order) => {
    const user = order.user;
    acc[user] = (acc[user] || 0) + 1;
    return acc;
  }, {});
  
  const result = Object.entries(ordersCount).map(([user, count]) => {
    return `'${user}' => ${count}`;
  });
  
  console.log(result);

// Завдання 1. Кількість замовлень кожного користувача
// Використовуйте reduce, щоб створити об’єкт:
// { Alice: 2, Bob: 2, Charlie: 1 }.
// Використовуйте Map:
// Замість об’єкту використовуємо Map, де ключ - ім’я користувача, а значення - кількість його замовлень
// Map { 'Alice' => 2, 'Bob' => 2, 'Charlie' => 1 }

  

