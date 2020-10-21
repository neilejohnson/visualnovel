//Adds text box and text box functionality to game
export function addTextWindow(art, currentNode, config) {

    //adds text window element with id and displays config file defined text box image
    const newTextWindow = document.createElement('div');
    newTextWindow.setAttribute('id', 'text-window');
    newTextWindow.style.backgroundImage = `url("img/${config['text_box_img']}")`

    //if name, creates elements for name box and inserts it into newTextWindow div
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

    //create ul that will hold dialogue. class name depends on existance of dialogueDescription
    const dialogue = document.createElement('ul');
    dialogue.setAttribute('id', 'dialogue');
    currentNode['option_description'] ? dialogue.classList = 'dialogueWithDescription': dialogue.classList = 'dialogueWithoutDescription'; 
    newTextWindow.appendChild(dialogue);

    //insert text into field. If option, defines class as option
    const textNames = ['text1', 'text2', 'text3'];
    textNames.forEach(function(text) {
        const li = document.createElement('li');
        li.setAttribute('id', text);
        const p = document.createElement('p');
        li.appendChild(p);
        if (currentNode['display_mode']) {
            //currently displaying everything as an option until I get text to work.
        // if (currentNode['display_mode'] === 'option') {
            p.innerText = currentNode[`option_${text.slice(-1)}_text`];
            li.classList = 'option';
        }
        dialogue.appendChild(li);
    });

    //if display mode is text, run type out text function
    // if (currentNode['display_mode'] === 'text') { typeOutText() };
    
    //last thing to add is the entire text window
    art.appendChild(newTextWindow);

    //add all option event listeners
    if(currentNode['display_mode'] === 'option') {
        textNames.forEach(function(text) {
            document.getElementById(text).addEventListener('click', () => {
                currentNode = data[currentNode[`option_${text.slice(-1)}_output`]]; 
                nextNode(art, currentNode);
            });
        })
    }
};

//!!!!! work on this next

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