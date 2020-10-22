import { addImg, addAllImages } from './imageDisplay.js'
import { addTextWindow } from './textDisplay.js'
import { data } from '../data.js'

export function nextNode(art, currentNode, config) {
    //clear art div
    art.innerHTML='';
    //add all images to the parent divW
    addAllImages(art, currentNode);
    //check if current node is scene
    //if so, automatically update current node and run function nextNode after set scene length
    if(currentNode['display_mode']==='scene') {
        setTimeout( function() { 
            currentNode = data[currentNode['output']]; 
            nextNode();
        }, currentNode['scene_length']);
    //otherwise run function addTextWindow
    } else {
        addTextWindow(art, currentNode, config);
    }

};
