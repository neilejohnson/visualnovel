console.log(data["1"]['general_mode'])
////////  ^ access data by data[string value of node][string value of key]

// Starting node - targeting first node to begin game
let currentNode=data['1'];

/////////////////////////////////
///// inialize dom elements /////
/////////////////////////////////

const settingBack = document.querySelector('#settingBack');
const settingMid = document.querySelector('#settingMid');
const settingFront = document.querySelector('#settingFront');
const imgLeft = document.querySelector('#imgLeft');
const imgCenter = document.querySelector('#imgCenter');
const imgRight = document.querySelector('#imgRight');
const text1 = document.querySelector('#text1');
const text2 = document.querySelector('#text2');
const text3 = document.querySelector('#text3');

////////////////////////////////////
///// event listener on button /////
////////////////////////////////////

const btn = document.querySelector("button");

/////////////////////////
///// MAIN FUNCTION /////
/////////////////////////

defineSettingMode(currentNode);

const nextNode = () => {
    // runs all code for setting up backgrounds
    defineSettingMode(currentNode);
    switch(currentNode['general_mode']) {
        case 'text':
            console.log('text');
            //display next button
            //display name if there is one
            break;
        case 'option':
            console.log('option');
            //display text1,2,3 as option
            break;
        case 'scene':
            console.log('scene');
            //entire text box will not be displayed
    }
       
    if (!currentNode['text1']) { text1.innerHTML='&nbsp'; } else text1.innerHTML=currentNode['text1'];
    if (!currentNode['text2']) { text2.innerHTML='&nbsp'; } else text3.innerHTML=currentNode['text2'];
    if (!currentNode['text3']) { text3.innerHTML='&nbsp'; } else text3.innerHTML=currentNode['text3'];
}

////////////////////////////
///// SETTING FUNCTION /////
////////////////////////////

function defineSettingMode(selectedNode) {
    switch(selectedNode['setting_mode']) {
        default:
            break;
//no breaks here as it makes more sense for these to be stacked
        case 'three':
            settingMid.src=currentNode['setting_front'];
            if (currentNode['setting_front_animation']) settingFront.classList.add(currentNode['setting_front_animation']); 
            if (currentNode['setting_front_opacity']) settingFront.style.opacity = currentNode['setting_front_opacity'];     
        case 'two':
            settingMid.src=currentNode['setting_mid'];
            if (currentNode['setting_mid_animation']) settingMid.classList.add(currentNode['setting_mid_animation']); 
            if (currentNode['setting_mid_opacity']) settingMid.style.opacity = currentNode['setting_mid_opacity'];     
        case 'one':
            if (currentNode['setting_back_animation']) settingBack.classList.add(currentNode['setting_back_animation']); 
            if (currentNode['setting_back_opacity']) settingBack.style.opacity = currentNode['setting_back_opacity'];          
        case 'simple':
            settingBack.src=currentNode['setting_back'];
        //if opacity is declared, must remove that style for next node
    }
}

btn.addEventListener("click", nextNode);




