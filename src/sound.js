//set to play audio type sound
export function playSound(src, volume = 1) {
    let audio = document.createElement('audio');
    audio.src = `./sound/${src}`
    audio.volume = volume;
    audio.play();
    audio = null;
};

export function loopSound(src, volume = 1) {
    let loopedAudio = document.createElement('audio');
    loopedAudio.src = `./sound/${src}`
    loopedAudio.volume = volume;
    //boolean value to communicate if the audio should be looped or not
    loopedAudio.loop = true;
    loopedAudio.play();
}

//audio.muted - boolean if the audio should be muted
//audio.preload = auto - set if the audio should be preloaded 
//audio.paused - boolean if the audio is paused
//audio.okaybackRate - (1 - normal, .5 half speed, 2 double speed, -1 backwards, 0.5 backwards half speed)
// can make a fadeOut or fadeIn function that gradually edits the volume 