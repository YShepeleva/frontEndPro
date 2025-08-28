// Завдання 4. Хто витратив більше за всіх?
// Використовуйте reduce, щоб знайти користувача з найбільшими витратами.
// "Bob витратив більше за всіх: $1700"

const biggestOrder = orders.reduce((acc, order) => {
    const user = order.user;
    const total = order.items.reduce((sum, item) => item.price, 0)
    acc[user] = (acc[user] || 0) + total;
    return acc;
}, {});

let maxUser = null;
let maxSpent = 0;

for (const [user, amount] of Object.entries(biggestOrder)) {
    if (amount > maxSpent) {
        maxSpent = amount;
        maxUser = user;
    }
}

console.log(`${maxUser} витратив більше за всіх: ${maxSpent}`);