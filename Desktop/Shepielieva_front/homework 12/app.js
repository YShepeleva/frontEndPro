let userLink;

document.querySelector('.button-1').addEventListener('click', () => {
    const url = prompt("Enter link");

    if (url && url.trim() !== "") {   
        userLink = url.trim();
        alert(`${userLink} your link is saved`);
    };
});

document.querySelector('.button-2').addEventListener('click', () => {
    if (userLink) {
        window.open(`${userLink}`);
    } else {
        alert('First click to write link')
    }  
});