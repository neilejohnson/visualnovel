import { config, data } from '../data.js'
import { nextNode } from './nodeHandler.js'

//Adds text box and text box functionality to game
export function addTextWindow(art, currentNode, config) {

    //adds text window element with id and displays config file defined text box image
    const newTextWindow = document.createElement('div');
    newTextWindow.setAttribute('id', 'text-window');
    newTextWindow.style.backgroundImage = `url("img/${config['text_box_img']}")`

    //ADD NAME, IF SPECIFIED
    if (currentNode['name']) {
        const nameBox = document.createElement('div');
        nameBox.setAttribute('id', 'name-field');
        nameBox.className = currentNode['name_position'];
        const nameText = document.createElement('p');
        nameText.innerHTML = `&nbsp${currentNode['name']}&nbsp`;
        nameBox.appendChild(nameText);
        newTextWindow.appendChild(nameBox);
    }

    //ADD OPTION DESCRIPTION, IF SPECIFIED
    if(currentNode['option_description']) {
        const optionTextTop = document.createElement('div');
        optionTextTop.setAttribute('id', 'optionDescription');
        optionTextTop.innerText = currentNode['option_description']
        newTextWindow.appendChild(optionTextTop);
    }

    //ADD TEXT/OPTION BOX
    const dialogue = document.createElement('ul');
    dialogue.setAttribute('id', 'dialogue');
    currentNode['option_description'] ? dialogue.classList = 'dialogueWithDescription': dialogue.classList = 'dialogueWithoutDescription'; 
    newTextWindow.appendChild(dialogue);

    //ADD TEXT LINES
    var textNames = ['text1', 'text2', 'text3'];
    textNames.forEach(function(text) {
        
        //CREATE INDIVIDUAL LI ELEMENTS FOR EACH TEXT LINE
        const li = document.createElement('li');
        li.setAttribute('id', text);
        const p = document.createElement('p');
        li.appendChild(p);

        // if (currentNode['display_mode']) {
            //currently displaying everything as an option until I get text to work.
        if (currentNode['display_mode'] === 'option') {
            p.innerText = currentNode[`option_${text.slice(-1)}_text`];
            li.classList = 'option';
        }
        dialogue.appendChild(li);
    });
    
    //ADD TEXT WINDOW
    art.appendChild(newTextWindow);

    //if display mode is text, run type out text function
    if (currentNode['display_mode'] === 'text') { typeOutText(currentNode, newTextWindow) };

    //ADD EVENT LISTENERS TO OPTION
    if(currentNode['display_mode'] === 'option') {
        textNames.forEach(function(text) {
            document.getElementById(text).addEventListener('click', () => {
                currentNode = data[currentNode[`option_${text.slice(-1)}_output`]]; 
                nextNode(art, currentNode);
            });
        })
    }
};

//refactor so typeOutText is not recursive. all logic should be in next character

function typeOutText(currentNode, newTextWindow) {

    
    //create variables that target the text divs
    const targetText1 = document.querySelector('#text1 p');
    const targetText2 = document.querySelector('#text2 p');
    const targetText3 = document.querySelector('#text3 p');

    let textToAdd1 = currentNode['line_1_text'].slice().split('');
    let textToAdd2 = currentNode['line_2_text'].slice().split('');
    let textToAdd3 = currentNode['line_3_text'].slice().split('');

    let textLength1 = textToAdd1.length;
    let textLength2 = textToAdd2.length;
    let textLength3 = textToAdd3.length;

    const textInterval = setInterval(addCharacter, 85);

    function addCharacter() {
        if(textLength1) { 
            targetText1.innerHTML += textToAdd1.shift() 
            textLength1--
            typeSound()
        } else if(textLength2) {
            targetText2.innerHTML += textToAdd2.shift() 
            textLength2--
            typeSound()
        } else if(textLength3) {
            targetText3.innerHTML += textToAdd3.shift() 
            textLength3--
            typeSound()
        } else {
            finallyAddNext(currentNode, newTextWindow);
            clearInterval(textInterval);
        };
    };
};

function finallyAddNext(currentNode, newTextWindow) {
    const next = document.createElement('div');
    next.setAttribute('id', 'next');
    newTextWindow.appendChild(next);
    next.addEventListener('click', () => {
        currentNode = data[currentNode['output']];
        nextNode(art, currentNode, config);
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
