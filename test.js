var currentNode = data['1'];

//ADD ART DIV
const art = document.createElement('div')
art.setAttribute('id', 'art')
game.appendChild(art);

nextNode()

function nextNode() {
    art.innerHTML='';
    switch (currentNode['display_mode']) {
        case 'scene':
            addAllImages()
            setTimeout( function() { 
                currentNode = data[currentNode['scene_output']]; 
                nextNode();
            }, currentNode['scene_length']);
            break;
        case 'text':
            break; 
        case 'option':
    };
};


//function to add an img to a parent element and assign an id
function addImg(parent, imgSrc, id, opacity, imgClass) {
    let newImg = document.createElement('img');
    newImg.setAttribute('id', id);
    newImg.src=imgSrc;
    if (opacity) { newImg.style.opacity = parseFloat(opacity) };
    if (imgClass) { newImg.className = imgClass };
    parent.appendChild(newImg);
};

function addAllImages() {
    //backgrounds
    addImg(art, currentNode['setting_front'], 'settingFront', currentNode['setting_front_opacity'], currentNode['setting_front_animation']);
    addImg(art, currentNode['setting_mid'], 'settingMid', currentNode['setting_mid_opacity'], currentNode['setting_mid_animation']);
    addImg(art, currentNode['setting_back'], 'settingBack', currentNode['setting_back_opacity'], currentNode['setting_back_animation']);
    //characters
    addImg(art, currentNode['img_left'], 'imgLeft', 1, currentNode['img_left_animation']);
    addImg(art, currentNode['img_center'], 'imgCenter', 1, currentNode['img_center_animation']);
    addImg(art, currentNode['img_right'], 'imgRight', 1, currentNode['img_right_animation']);
};

function defineSceneOutput() {
    currentNode = data[currentNode['scene_output']];
};


// function setBackground() {
//     switch(currentNode['setting_mode']) {
//         default:
//             break;
//         case 'three':
//             addImg(art, currentNode['setting_front'], 'settingFront', currentNode['setting_front_opacity'], currentNode['setting_front_animation']);
//         case 'two':
//             addImg(art, currentNode['setting_mid'], 'settingMid', currentNode['setting_mid_opacity'], currentNode['setting_mid_animation']);
//         case 'one':
//             addImg(art, currentNode['setting_back'], 'settingBack', currentNode['setting_back_opacity'], currentNode['setting_back_animation']);
//     }
// };
