import { config, data } from './data.js'
import { nextNode } from './src/nodeHandler.js'
import { addImg, addAllImages } from './src/imageDisplay.js'

//declare first node from data
var currentNode = data['1'];

//create a new div with id of art to append to the game div
const art = document.createElement('div');
art.setAttribute('id', 'art');
game.appendChild(art);

addAllImages(art, currentNode);
