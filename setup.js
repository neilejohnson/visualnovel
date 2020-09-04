//define game in setup instead of index
const game = document.querySelector('#game');

//ADDS div with id art to game
// let art = document.createElement('div')
// art.setAttribute('id', 'art')
// game.appendChild(art);

const textWindow = document.querySelector('#text-window')

///// Font \\\\\
//if google font, must specify it in style.css
if (config['default_font']) game.style.fontFamily = config['default_font'];
if (config['default_font_size']) game.style.fontSize = `${config['default_font_size']}px`;

///// Text Color \\\\\
//hex, rgb, or basic color name will do
if (config['default_text_color']) game.style.color = config['default_text_color'];

///// Background_color \\\\\
game.style.backgroundColor = (config['default_background_color']) ? config['default_background_color'] : 'black';

///// text_box_img \\\\\
//WILL BE ADDED LATER IN PYTHON
textWindow.style.backgroundImage = `url("img/${config['text_box_img']}")`

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