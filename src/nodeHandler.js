import { addAllImages } from './imageDisplay.js'
import { addTextWindow } from './textDisplay.js'
import { playSound, loopSound, fadeOutAudio } from './sound.js'

export function nextNode(game) {
    //clear art div
    game.art.innerHTML = '';

    //add all images to the parent divW
    addAllImages(game);

    if(game.currentNode['sound']) {
        game.currentNode['sound_volume'] ? 
            playSound(game.currentNode['sound'], game.currentNode['sound_volume']) : 
            playSound(game.currentNode['sound']);
    };

    if(game.currentNode['loop_sound']) loopSound(game);

    if(game.currentNode['fade_out_active_loop']) fadeOutAudio(game.audio[0]);

    if(game.currentNode['display_mode']==='end') return;

    //check if current node is scene
    //if so, automatically update current node and run function nextNode after set scene length
    if(game.currentNode['display_mode']==='scene') {
        setTimeout( function() { 
            game.currentNode = game.data[game.currentNode['output']]; 
            nextNode(game);
        }, game.currentNode['scene_length']);
    //otherwise run function addTextWindow
    } else {
        addTextWindow(game);
    };
};
