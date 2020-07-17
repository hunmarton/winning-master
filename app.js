const icon = document.querySelector('.hamburger');
const menu = document.querySelector('#ham');
const bigImg = document.querySelector('.big-image');
const images = document.querySelectorAll('#imgGal');
const body = document.querySelector('body');

/*
Hamburger menu for resposive navigation
*/
icon.addEventListener('click', () => {

    menu.classList.toggle('visible');
});

/*
Gallery images full width
*/
images.forEach(image => {
    image.addEventListener('click', e => {
        document.querySelectorAll('#imgGal').forEach(el => {
            el.classList.add('hid-vis');
        });
        const data = e.target.dataset.url;
        bigImg.style.backgroundImage = data;
        bigImg.classList.add('vis');
        body.classList.add('body-test');
        

    });

});

