import Game from './game.js'
import { data, config } from '../data.js'

export function setup() {
    //define game in setup instead of index
    const gameWindow = document.querySelector('#gameWindow');

    //create a new div with id of art to append to the game div
    const art = document.createElement('div');
    art.setAttribute('id', 'art');
    gameWindow.appendChild(art);

    const game = new Game(data, config, art)

    ///// Font \\\\\
    // //if google font, must specify it in style.css
    // if (game.config['default_font']) gameWindow.style.fontFamily = game.config['default_font'];
    // if (game.config['default_font_size']) gameWindow.style.fontSize = `${game.config['default_font_size']}px`;

    // ///// Text Color \\\\\
    // //hex, rgb, or basic color name will do
    // if (game.config['default_text_color']) gameWindow.style.color = game.config['default_text_color'];

    // ///// Background_color \\\\\
    // gameWindow.style.backgroundColor = (game.config['default_background_color']) ? game.config['default_background_color'] : 'black';

    ///// text_box_img \\\\\
    //WILL BE ADDED LATER IN PYTHON
    // textWindow.style.backgroundImage = `url("img/${game.config['text_box_img']}")`
    return game;
}


// const textWindow = document.querySelector('#text-window')

