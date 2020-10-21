import { config, data } from './data.js'
import { nextNode } from './src/nodeHandler.js'

//declare first node from data
var currentNode = data['1'];

//create a new div with id of art to append to the game div
const art = document.createElement('div');
art.setAttribute('id', 'art');
game.appendChild(art);

nextNode(art, currentNode, config);
