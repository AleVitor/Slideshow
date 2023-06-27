'use strict';

const images = [
    {'id': '1', 'url':'./img/1.jpg'},
    {'id': '2', 'url':'./img/2.jpg'},
    {'id': '3', 'url':'./img/3.jpg'},
    {'id': '4', 'url':'./img/4.jpg'},
    {'id': '5', 'url':'./img/5.jpg'},
    {'id': '6', 'url':'./img/6.jpg'},
    {'id': '7', 'url':'./img/7.jpg'},
    {'id': '8', 'url':'./img/8.jpg'},
    {'id': '9', 'url':'./img/9.jpg'},
    {'id': '10', 'url':'./img/10.jpg'},
    {'id': '11', 'url':'./img/11.jpg'},
    {'id': '12', 'url':'./img/12.jpg'},
    {'id': '13', 'url':'./img/13.jpg'},
    {'id': '14', 'url':'./img/14.jpg'},
    {'id': '15', 'url':'./img/15.jpg'},
    {'id': '16', 'url':'./img/16.jpg'},
    {'id': '17', 'url':'./img/17.jpg'},
    {'id': '18', 'url':'./img/18.jpg'},
    {'id': '19', 'url':'./img/19.jpg'},
    {'id': '20', 'url':'./img/20.jpg'},
]

const containerImg = document.getElementById('container-img');

const loadImages = (images, container) => {
    images.forEach (image => {
        container.innerHTML += `
        <div class='imagens'>
            <img src='${image.url}' >
        </div>`
    })
}

loadImages(images, containerImg);

let imagens = document.querySelectorAll('.imagens');

const previous = () => {
    containerImg.appendChild(imagens[0]);
    imagens = document.querySelectorAll('.imagens');
}

const next = () => {
    const lastImg = imagens[imagens.length -1 ];
    containerImg.insertBefore( lastImg, imagens[0]);
    imagens = document.querySelectorAll('.imagens');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);