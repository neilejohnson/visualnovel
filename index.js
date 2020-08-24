console.log(data["1"]['general_mode'])

/////////////////////////////////
///// inialize dom elements /////
/////////////////////////////////

const settingFront = document.querySelector('#setting-front');
const char1 = document.querySelector('#char1');
const char2 = document.querySelector('#char2');
const text1 = document.querySelector('#text1');
const text2 = document.querySelector('#text2');
const text3 = document.querySelector('#text3');

text1.innerHTML="this is it"

//will be using a lot of ternary operators
// condition ? exprIfTrue : exprIfFalse

////////////////////////////
///// master node list /////
////////////////////////////

const nodes = {
    node1: {
        settingFront: 'img/hht_rough_forest01.19.jpg',
        mode: 'text',
        char1: 'img/char.png',
        char2: 'img/char2.png',
        text1: 'line 1 text',
        text2: 'some more',
        text3: 'even more text',
        output1: 'node2',
        output2: 'node2',
        output3: 'node3',
        output: 'node2'
    },

    node2: {
        settingFront: '',
        mode: 'option',
        char1: 'img/char2.png',
        char2: 'img/char.png',
        text1: 'texty',
        text2: 'test',
        text3: 'woo',
        output1: 'node1',
        output2: 'node1',
        output3: 'node3',
        output: 'node3'
    },

    node3: {
        settingFront: '',
        mode: 'text',
        char1: 'img/char2.png',
        char2: 'img/char.png',
        text1: 'texty',
        text2: 'test',
        text3: 'another one',
        output1: 'node1',
        output2: 'node1',
        output3: 'node2',
        output: 'node1'
    }
}

let currentNode=nodes['node1'];

settingFront.src=currentNode['settingFront'];
char1.src=currentNode['char1'];
char2.src=currentNode['char2'];

////////////////////////////////////
///// event listener on button /////
////////////////////////////////////

const btn = document.querySelector("button");

//redefining node
//displaying new info.

// function updateNode(starterNode) {
//     return starterNode['output']
// }

const nextNode = () => {
    currentNode=nodes[currentNode['output']];
    settingFront.src=currentNode['settingFront'];
    char1.src=currentNode['char1'];
    char2.src=currentNode['char2'];
    if (!currentNode['text1']) { text1.innerHTML='&nbsp'; } else text1.innerHTML=currentNode['text1'];
    if (!currentNode['text2']) { text2.innerHTML='&nbsp'; } else text3.innerHTML=currentNode['text2'];
    if (!currentNode['text3']) { text3.innerHTML='&nbsp'; } else text3.innerHTML=currentNode['text3'];
}

btn.addEventListener("click", nextNode);




