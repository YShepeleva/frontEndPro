// Покласти в папку будь-які зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 
// 6.jpg, 7.jpg, 8.jpg, 9.jpg. 
// Вивести зображення, отримане випадковим чином (Math.random)

document.querySelector('.btn-picture').addEventListener('click', () => {
    const image = document.querySelector('.image');
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    image.setAttribute('src', `./img/${randomNumber}.jpeg`);
});

