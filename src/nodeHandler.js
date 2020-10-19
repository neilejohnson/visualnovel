export function nextNode(currentNode) {

    art.innerHTML='';
    addAllImages();

    if(currentNode['display_mode']==='scene') {
        setTimeout( function() { 
            currentNode = data[currentNode['output']]; 
            nextNode();
        }, currentNode['scene_length']);
    } else {
        addTextWindow();
    }

};
