var currentNode = data['1'];
const errorReport = []

const art = document.createElement('div')
art.setAttribute('id', 'art')
game.appendChild(art);

nextNode()

function nextNode() {
    art.innerHTML='';
    addAllImages();
    if(currentNode['display_mode']==='scene') {
        setTimeout( function() { 
            currentNode = data[currentNode['output']]; 
            nextNode();
        }, currentNode['scene_length']);
    } else {
        addTextWindow();
    }
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
    if(currentNode['setting_front']) { addImg(art, currentNode['setting_front'], 'settingFront', currentNode['setting_front_opacity'], currentNode['setting_front_animation']) };
    if(currentNode['setting_mid']) { addImg(art, currentNode['setting_mid'], 'settingMid', currentNode['setting_mid_opacity'], currentNode['setting_mid_animation']) };
    if(currentNode['setting_back']) { addImg(art, currentNode['setting_back'], 'settingBack', currentNode['setting_back_opacity'], currentNode['setting_back_animation']) };
    //characters
    if(currentNode['img_left']) { addImg(art, currentNode['img_left'], 'imgLeft', currentNode['img_left_opacity'], currentNode['img_left_animation']) };
    if(currentNode['img_center']) { addImg(art, currentNode['img_center'], 'imgCenter', currentNode['img_center_opacity'], currentNode['img_center_animation']) };
    if(currentNode['img_right']) { addImg(art, currentNode['img_right'], 'imgRight', currentNode['img_right_opacity'], currentNode['img_right_animation'])};
};

function addTextWindow() {
    const newTextWindow = document.createElement('div');
    newTextWindow.setAttribute('id', 'text-window');
    newTextWindow.style.backgroundImage = `url("img/${config['text_box_img']}")`
    //add name if present
    if (currentNode['name']) {
        const nameBox = document.createElement('div');
        nameBox.setAttribute('id', 'name-field');
        nameBox.className = currentNode['name_position'];
        const nameText = document.createElement('p');
        nameText.innerHTML = `&nbsp${currentNode['name']}&nbsp`;
        nameBox.appendChild(nameText);
        newTextWindow.appendChild(nameBox);
    }

    if(currentNode['option_description']) {
        const optionTextTop = document.createElement('div');
        optionTextTop.setAttribute('id', 'optionDescription');
        optionTextTop.innerText = currentNode['option_description']
        newTextWindow.appendChild(optionTextTop);
    }

    const dialogue = document.createElement('ul');
    dialogue.setAttribute('id', 'dialogue');
    currentNode['option_description'] ? dialogue.classList = 'dialogueWithDescription': dialogue.classList = 'dialogueWithoutDescription'; 

    newTextWindow.appendChild(dialogue);

    const textNames = ['text1', 'text2', 'text3'];
    textNames.forEach(function(text) {
        const li = document.createElement('li');
        li.setAttribute('id', text);
        const p = document.createElement('p');
        li.appendChild(p);
        if(currentNode['display_mode'] === 'text') {
            p.innerText = currentNode[`line_${text.slice(-1)}_text`];
        } else if (currentNode['display_mode'] === 'option') {
            p.innerText = currentNode[`option_${text.slice(-1)}_text`];
            li.classList = 'option';
        } else {
            errorReport.push("must declare correct 'display_mode' for this node ('scene', 'option', or 'text')");
        }
        dialogue.appendChild(li);
    });

    art.appendChild(newTextWindow);

    if(currentNode['display_mode'] === 'text') {
        const next = document.createElement('div');
        next.setAttribute('id', 'next');
        newTextWindow.appendChild(next);
        next.addEventListener('click', () => {
            currentNode = data[currentNode['output']]; 
            nextNode();
        });
    }

    if(currentNode['display_mode'] === 'option') {
        textNames.forEach(function(text) {
            document.getElementById(text).addEventListener('click', () => {
                currentNode = data[currentNode[`option_${text.slice(-1)}_output`]]; 
                nextNode();
            });
        })

    }

};