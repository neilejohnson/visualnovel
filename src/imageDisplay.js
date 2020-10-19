//function to add an img to a parent element and assign an id
export function addImg(parent, imgSrc, id, opacity, imgClass) {
    const newImg = document.createElement('img');
    newImg.setAttribute('id', id);
    newImg.src=imgSrc;
    if (opacity) { newImg.style.opacity = parseFloat(opacity) };
    if (imgClass) { newImg.className = imgClass };
    parent.appendChild(newImg);
};

export function addAllImages(art, currentNode) {
    //backgrounds
    if(currentNode['setting_front']) { addImg(art, currentNode['setting_front'], 'settingFront', currentNode['setting_front_opacity'], currentNode['setting_front_animation']) };
    if(currentNode['setting_mid']) { addImg(art, currentNode['setting_mid'], 'settingMid', currentNode['setting_mid_opacity'], currentNode['setting_mid_animation']) };
    if(currentNode['setting_back']) { addImg(art, currentNode['setting_back'], 'settingBack', currentNode['setting_back_opacity'], currentNode['setting_back_animation']) };
    //characters
    if(currentNode['img_left']) { addImg(art, currentNode['img_left'], 'imgLeft', currentNode['img_left_opacity'], currentNode['img_left_animation']) };
    if(currentNode['img_center']) { addImg(art, currentNode['img_center'], 'imgCenter', currentNode['img_center_opacity'], currentNode['img_center_animation']) };
    if(currentNode['img_right']) { addImg(art, currentNode['img_right'], 'imgRight', currentNode['img_right_opacity'], currentNode['img_right_animation'])};
};
