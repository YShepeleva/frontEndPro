// Створіть HTML-сторінку, яка містить список завдань (to-do list) з можливістю додавання нових завдань. Ваше ціль - використовуючи делегування подій, створити обробник подій для списку завдань, який дозволить видаляти завдання при кліку на них.

// Покроковий план:

// Створіть HTML-елементи: список завдань ul, текстове поле для вводу нових завдань та кнопку для додавання.
// Додайте обробник подій до списку завдань ul, використовуючи делегування.
// При кліку на будь-якій кнопці видалення, видаліть цей пункт.
// Додайте можливість вводити нові завдання у текстове поле і додавати їх до списку за допомогою кнопки.


document.querySelector('.container').addEventListener('click', function (event) {
  if (event.target.classList.contains('remove-btn')) {
    alert(`You are delated: ${event.target.classList}`);
    event.target.parentElement.remove();
  };
});

document.querySelector('.button-new-task').addEventListener('click', function (event) {
  const newInput = document.querySelector('.text-task');
  const newText = newInput.value.trim();

  if (newText !== '') {
    const newTask = document.createElement('li');
    newTask.textContent = newText;

    document.querySelector('.container').appendChild(newTask);

    const newButtonDelete = document.createElement('button');
    newButtonDelete.classList.add('remove-btn');
    newButtonDelete.textContent = 'Delete';

    newTask.appendChild(newButtonDelete);
  }
});
