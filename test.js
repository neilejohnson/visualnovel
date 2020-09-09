var currentNode = data['1'];



//ADD ART DIV
const art = document.createElement('div')
art.setAttribute('id', 'art')
game.appendChild(art);

nextNode()

function nextNode() {
    art.innerHTML='';
    addAllImages()
    switch (currentNode['display_mode']) {
        case 'scene':
            setTimeout( function() { 
                currentNode = data[currentNode['scene_output']]; 
                nextNode();
            }, currentNode['scene_length']);
            break;
        case 'text':
            addTextWindow();
            break; 
        case 'option':
    };
};


//function to add an img to a parent element and assign an id
function addImg(parent, imgSrc, id, opacity, imgClass) {
    const newImg = document.createElement('img');
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

function addTextWindow() {
    const newTextWindow = document.createElement('div');
    newTextWindow.setAttribute('id', 'text-window');
    newTextWindow.style.backgroundImage = `url("img/${config['text_box_img']}")`
    if (currentNode['name']) {
        const nameBox = document.createElement('div');
        nameBox.setAttribute('id', 'name-field');
        nameBox.className = currentNode['name_position'];
        const nameText = document.createElement('p');
        nameText.innerHTML = `&nbsp${currentNode['name']}&nbsp`;
        nameBox.appendChild(nameText);
        newTextWindow.appendChild(nameBox);
    }
    const dialogue = document.createElement('ul');
    dialogue.setAttribute('id', 'dialogue');

    //will probably have to come back and add a textList.forEach(function(item) {} ); use const li instead of const text1
    
    const textNames = ['text1', 'text2', 'text3'];
    textNames.forEach(function(text) {
        const li = document.createElement('li');
        li.setAttribute('id', text);
        li.innerText = 'hello';
        dialogue.appendChild(li);
    });

    newTextWindow.appendChild(dialogue);
    //if option then classname option


    art.appendChild(newTextWindow);

}
