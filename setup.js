import Game from './src/game.js'
import { data, config } from './data.js'

export function setup() {
    //define game in setup instead of index
    const gameWindow = document.querySelector('#gameWindow');

    //create a new div with id of art to append to the game div
    const art = document.createElement('div');
    art.setAttribute('id', 'art');
    gameWindow.appendChild(art);

    const game = new Game(data, config, art)

    ///// Font \\\\\
    //if google font, must specify it in style.css
    if (game.config['default_font']) gameWindow.style.fontFamily = game.config['default_font'];
    if (game.config['default_font_size']) gameWindow.style.fontSize = `${game.config['default_font_size']}px`;

    ///// Text Color \\\\\
    //hex, rgb, or basic color name will do
    if (game.config['default_text_color']) gameWindow.style.color = game.config['default_text_color'];

    ///// Background_color \\\\\
    gameWindow.style.backgroundColor = (game.config['default_background_color']) ? game.config['default_background_color'] : 'black';

    ///// text_box_img \\\\\
    //WILL BE ADDED LATER IN PYTHON
    textWindow.style.backgroundImage = `url("img/${game.config['text_box_img']}")`
}



/////     text_sound
// short sound that will play when text is scrolling

/////     name_box_img //will not include for now
//WILL BE ADDED LATER IN PYTHON
//point to image in img folder. should be a specific size

/////     option_button_color
//WILL BE ADDED LATER IN PYTHON.
//hex, rgb, or basic color name will do
// what color will the option button be? 

/////     option_button_color_hover
//WILL BE ADDED LATER IN PYTHON.
//what color will the hover be? if none is given, hover will slighly darken the button

/////     text_speed
//WILL BE ADDED LATER IN PYTHON.
// will allow you to set as slow, fast
//adding nothing will be default