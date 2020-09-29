// document.addEventListener('DOMContentLoaded', init)

var currentNode = data['1'];

const art = document.createElement('div');
art.setAttribute('id', 'art');
game.appendChild(art);

// function init() {
//     const btn = document.querySelector('button');
//     btn.addEventListener('doubleclick', nextNode());
// }

nextNode();

function nextNode() {
    console.log('clicked');
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

    //simply adds textWindow
    const newTextWindow = document.createElement('div');
    newTextWindow.setAttribute('id', 'text-window');
    newTextWindow.style.backgroundImage = `url("img/${config['text_box_img']}")`

    //if name add name    
    if (currentNode['name']) {
        const nameBox = document.createElement('div');
        nameBox.setAttribute('id', 'name-field');
        nameBox.className = currentNode['name_position'];
        const nameText = document.createElement('p');
        nameText.innerHTML = `&nbsp${currentNode['name']}&nbsp`;
        nameBox.appendChild(nameText);
        newTextWindow.appendChild(nameBox);
    }

    //if option description, add option description
    if(currentNode['option_description']) {
        const optionTextTop = document.createElement('div');
        optionTextTop.setAttribute('id', 'optionDescription');
        optionTextTop.innerText = currentNode['option_description']
        newTextWindow.appendChild(optionTextTop);
    }

    //create ul that will hold dialogue. format dialogueDescription
    const dialogue = document.createElement('ul');
    dialogue.setAttribute('id', 'dialogue');
    currentNode['option_description'] ? dialogue.classList = 'dialogueWithDescription': dialogue.classList = 'dialogueWithoutDescription'; 
    newTextWindow.appendChild(dialogue);

    //declare array of text
    const textNames = ['text1', 'text2', 'text3'];
    textNames.forEach(function(text) {
        const li = document.createElement('li');
        li.setAttribute('id', text);
        const p = document.createElement('p');
        li.appendChild(p);
        if (currentNode['display_mode'] === 'option') {
            p.innerText = currentNode[`option_${text.slice(-1)}_text`];
            li.classList = 'option';
        }
        dialogue.appendChild(li);
    });
    if (currentNode['display_mode'] === 'text') { typeOutText() };

    //last thing to add is the entire text window
    art.appendChild(newTextWindow);

    //add next event listener
    // if(currentNode['display_mode'] === 'text') {
    //     const next = document.createElement('div');
    //     next.setAttribute('id', 'next');
    //     newTextWindow.appendChild(next);
    //     next.addEventListener('click', () => {
    //         currentNode = data[currentNode['output']]; 
    //         nextNode();
    //     });
    // }


    //add all option event listeners
    if(currentNode['display_mode'] === 'option') {
        textNames.forEach(function(text) {
            document.getElementById(text).addEventListener('click', () => {
                currentNode = data[currentNode[`option_${text.slice(-1)}_output`]]; 
                nextNode();
            });
        })
    }

        //add all option event listeners
    if(currentNode['display_mode'] === 'option') {
        textNames.forEach(function(text) {
            document.getElementById(text).addEventListener('click', () => {
                currentNode = data[currentNode[`option_${text.slice(-1)}_output`]]; 
                nextNode();
            });
        })
    }
};

/////////////////////
/////// SOUND ///////
/////////////////////

//addText function
//first line checks to see if there is already text within the newLine, if there is, it empties it out
//next it identifies the text to add
//splits all text to add into an array character by character
//counter set to 0. this will be for knowing when to end the interval

//new function addCharacter
/* 
if the counter is equal to text to add, then the interval is cleared
else, character with index of counter added to innerHTML
counter goes up by one 
sound is played
*/

//what element am I adding to?
    //p

//where the line is coming from?
    // currentNode[`line_${text.slice(-1)}_text`]

//what is the functional line I am replacing?
    //p.innerText = currentNode[`line_${text.slice(-1)}_text`];

/*
typeout function
typeBoxProgess is initialized as 'text1'
add next if next
set text to coorespond to current textBoxProgress
//split that to array
start counter
set p to id of textBoxProgress

*/

function typeOutText() {
    //initialize with starting point of text1 
    if (typeof textBoxProgress === 'undefined') { var textBoxProgress = 'text1'; }
    
    //if next, add next, reset varialble and exit out of function early
    if(textBoxProgress === 'next') { 
        finallyAddNext(); 
        //reset variagle to text1 for next time function is used
        textBoxProgress = 'text1';
        return;
    };
    
    let textToAdd = currentNode[`line_${textBoxProgress.slice(-1)}_text`];
    
    //split text to add
    textToAdd ? textToAdd = textToAdd.split('') : textToAdd = '';

    //counter for current line
    let counter = 0;

    //grab div
    
    setInterval(addCharacter, 85);

    function addCharacter() {
        const p = document.getElementById(textBoxProgress);
        console.log(textBoxProgress);
        //!!!!!!!!!!gets choked up here. no idea why. maybe it's stupid to have this logic within addcharacter. create a different set function that will take of the logic
        if(counter===textToAdd.length || !textToAdd) {
            switch(textBoxProgress) {
                case('text1'):
                    typeOutText();
                    clearInterval(addCharacter);
                    textBoxProgress = 'text2';
                    console.log(textBoxProgress);
                    break;
                case('text2'):
                    typeOutText();
                    clearInterval(addCharacter);
                    textBoxProgress = 'text3';
                    break;
                case('text3'):
                    typeOutText();
                    clearInterval(addCharacter); 
                    textBoxProgress = 'next';  
            }
        } else {
            p.innerHTML += textToAdd[counter];
            counter++;
            // typeSound();
        }
    }
};

function finallyAddNext() {
    const next = document.createElement('div');
    next.setAttribute('id', 'next');
    newTextWindow.appendChild(next);
    next.addEventListener('click', () => {
        currentNode = data[currentNode['output']]; 
        nextNode();
    });
}

//set to play audio type sound
function typeSound() {
    let audio = document.createElement('audio');
    audio.src = 'sound/type.mp3'
    audio.volume = .5;
    audio.play()
    audio = null;
};


//copy of the entire block just in case
    // //declare array of text
    // const textNames = ['text1', 'text2', 'text3'];
    // textNames.forEach(function(text) {
    //     const li = document.createElement('li');
    //     li.setAttribute('id', text);
    //     const p = document.createElement('p');
    //     li.appendChild(p);
    //     if(currentNode['display_mode'] === 'text') {
    //         p.innerText = currentNode[`line_${text.slice(-1)}_text`];
    //     } else if (currentNode['display_mode'] === 'option') {
    //         p.innerText = currentNode[`option_${text.slice(-1)}_text`];
    //         li.classList = 'option';
    //     }
    //     dialogue.appendChild(li);
    // });