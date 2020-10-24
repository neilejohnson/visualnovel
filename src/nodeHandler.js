import { addAllImages } from './imageDisplay.js'
import { addTextWindow } from './textDisplay.js'
import { data } from '../data.js'

export function nextNode(game) {
    //clear art div
    game.art.innerHTML = '';
    //add all images to the parent divW
    addAllImages(game);
    //check if current node is scene
    //if so, automatically update current node and run function nextNode after set scene length
    if(game.currentNode['display_mode']==='scene') {
        setTimeout( function() { 
            game.currentNode = data[game.currentNode['output']]; 
            nextNode(game);
        }, game.currentNode['scene_length']);
    //otherwise run function addTextWindow
    } else {
        addTextWindow(game);
    }

};
