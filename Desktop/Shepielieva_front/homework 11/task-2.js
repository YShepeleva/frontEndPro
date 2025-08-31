// Є блок із текстом на сторінці та кнопка. 
// При натисканні на кнопку текст змінює колір. 
// При повторному натисканні – повертається попередній колір

const textElement = document.querySelector('div');

document.querySelector('.btn-color').addEventListener('click', function() {
    textElement.classList.toggle('alt-color');
});