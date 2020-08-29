//define game in setup instead of index
const game = document.querySelector('#game');
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
textWindow.style.backgroundImage = `url("img/${config['text_box_img']}")`

/////     name_box_img
//point to image in img folder. should be a specific size

/////     next_button_img
//small image for the next button

/////     option_button_color
//hex, rgb, or basic color name will do
// what color will the option button be? 

/////     option_button_color_hover
//what color will the hover be? if none is given, hover will slighly darken the button

/////     text_speed
// will allow you to set as slow, fast
//adding nothing will be default

/////     text_sound
// short sound that will play when text is scrolling