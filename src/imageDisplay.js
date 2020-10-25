import { nextNode } from "./nodeHandler.js";

//function to add an img to a parent element and assign an id
export function addImg(parent, imgSrc, id, opacity, imgClass) {
    const newImg = document.createElement('img');
    newImg.setAttribute('id', id);
    newImg.src=`./img/${imgSrc}`;
    if (opacity) { newImg.style.opacity = parseFloat(opacity) };
    if (imgClass) { newImg.className = imgClass };
    parent.appendChild(newImg);
};

//cycles through background and character images and adds them to parent element
export function addAllImages(game) {
    //backgrounds
    if(game.currentNode['setting_front']) addImg(game.art, game.currentNode['setting_front'], 'settingFront', game.currentNode['setting_front_opacity'], game.currentNode['setting_front_animation']);
    if(game.currentNode['setting_mid']) addImg(game.art, game.currentNode['setting_mid'], 'settingMid', game.currentNode['setting_mid_opacity'], game.currentNode['setting_mid_animation']);
    if(game.currentNode['setting_back']) addImg(game.art, game.currentNode['setting_back'], 'settingBack', game.currentNode['setting_back_opacity'], game.currentNode['setting_back_animation']);
    //characters
    if(game.currentNode['img_left']) addImg(game.art, game.currentNode['img_left'], 'imgLeft', game.currentNode['img_left_opacity'], game.currentNode['img_left_animation']);
    if(game.currentNode['img_center']) addImg(game.art, game.currentNode['img_center'], 'imgCenter', game.currentNode['img_center_opacity'], game.currentNode['img_center_animation']);
    if(game.currentNode['img_right']) addImg(game.art, game.currentNode['img_right'], 'imgRight', game.currentNode['img_right_opacity'], game.currentNode['img_right_animation']);
};

export function startScreen(game) {
    if(game.config['start_screen']) addImg(game.art, game.config['start_screen'], 'settingFront');
    if(game.config['start_button']) addImg(game.art, game.config['start_button'], 'startButton');

    const startButton = document.querySelector('#startButton');
    startButton.addEventListener('click', () => {
        nextNode(game);
    })
}