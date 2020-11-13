import { nextNode } from './nodeHandler.js'
import { playSound } from './sound.js'

//Adds text box and text box functionality to game
export function addTextWindow(game) {

    //adds text window element with id and displays config file defined text box image
    const newTextWindow = document.createElement('div');
    newTextWindow.setAttribute('id', 'text-window');
    newTextWindow.style.backgroundImage = `url("./img/${game.config['text_box_img']}")`

    //ADD NAME, IF SPECIFIED
    if (game.currentNode['name']) {
        const nameBox = document.createElement('div');
        nameBox.setAttribute('id', 'name-field');
        nameBox.className = game.currentNode['name_position'];
        const nameText = document.createElement('p');
        nameText.innerHTML = `&nbsp${game.currentNode['name']}&nbsp`;
        nameBox.appendChild(nameText);
        newTextWindow.appendChild(nameBox);
    };

    //ADD OPTION DESCRIPTION, IF SPECIFIED
    if(game.currentNode['option_description']) {
        const optionTextTop = document.createElement('div');
        optionTextTop.setAttribute('id', 'optionDescription');
        optionTextTop.innerText = game.currentNode['option_description'];
        newTextWindow.appendChild(optionTextTop);
    };

    //ADD TEXT/OPTION BOX
    const dialogue = document.createElement('ul');
    dialogue.setAttribute('id', 'dialogue');
    game.currentNode['option_description'] ? dialogue.classList = 'dialogueWithDescription': dialogue.classList = 'dialogueWithoutDescription'; 
    newTextWindow.appendChild(dialogue);

    //ADD TEXT LINES
    var textNames = ['text1', 'text2', 'text3'];
    textNames.forEach(function(text) {
        
        //CREATE INDIVIDUAL LI ELEMENTS FOR EACH TEXT LINE
        const li = document.createElement('li');
        li.setAttribute('id', text);
        const p = document.createElement('p');
        li.appendChild(p);

        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //needs to be implemented. if no text given, display blank space without an event listener
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        if (game.currentNode['display_mode'] === 'option') {
            p.innerText = game.currentNode[`option_${text.slice(-1)}_text`];
            li.classList = 'option';
        }
        dialogue.appendChild(li);
    });
    
    //ADD TEXT WINDOW
    art.appendChild(newTextWindow);

    //if display mode is text, run type out text function
    if (game.currentNode['display_mode'] === 'text') { typeOutText(game, newTextWindow) };

    //ADD EVENT LISTENERS TO OPTION
    if(game.currentNode['display_mode'] === 'option') {
        textNames.forEach(function(text) {
            document.getElementById(text).addEventListener('click', () => {
                game.currentNode = game.data[game.currentNode[`option_${text.slice(-1)}_output`]]; 
                nextNode(game);
            });
        })
    }
};

//refactor so typeOutText is not recursive. all logic should be in next character

function typeOutText(game, newTextWindow) {
    
    //create variables that target the text divs
    const targetText1 = document.querySelector('#text1 p');
    const targetText2 = document.querySelector('#text2 p');
    const targetText3 = document.querySelector('#text3 p');

    let textToAdd1 = game.currentNode['line_1_text'].slice().split('');
    let textToAdd2 = game.currentNode['line_2_text'].slice().split('');
    let textToAdd3 = game.currentNode['line_3_text'].slice().split('');

    let textLength1 = textToAdd1.length;
    let textLength2 = textToAdd2.length;
    let textLength3 = textToAdd3.length;

    const textInterval = setInterval(addCharacter, 85);

    function addCharacter() {
        if(textLength1) { 
            targetText1.innerHTML += textToAdd1.shift() 
            textLength1--
            playSound('type.mp3', .5)
        } else if(textLength2) {
            targetText2.innerHTML += textToAdd2.shift() 
            textLength2--
            playSound('type.mp3', .5)
        } else if(textLength3) {
            targetText3.innerHTML += textToAdd3.shift() 
            textLength3--
            playSound('type.mp3', .5)
        } else {
            finallyAddNext(game, newTextWindow);
            clearInterval(textInterval);
        };
    };
};

function finallyAddNext(game, newTextWindow) {
    const next = document.createElement('div');
    next.setAttribute('id', 'next');
    newTextWindow.appendChild(next);
    next.addEventListener('click', () => {
        game.currentNode = game.data[game.currentNode['output']];
        nextNode(game);
    });
}


