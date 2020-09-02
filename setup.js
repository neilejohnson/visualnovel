//define game in setup instead of index
const game = document.querySelector('#game');

function refreshGameWindow() {
    game.innerHTML=`<section id="art">
    <img id="settingBack" src="">
    <img id="settingMid" src="">
    <img id="settingFront" src="">
    <img id="imgLeft" src="">
    <img id="imgCenter" src="">
    <img id="imgRight" src="">
    <div id="text-window" class="row">
        <div id="name-field" class="center"><p></p></div>
        <ul class="dialogue">
            <li id="text1"><p>text row 1</p></li>
            <li id="text2"><p>text row 2</p></li>
            <li id="text3"><p></p></li>
        </ul>
        <!-- <button id="next-btn">Next</button> -->
        <div id="next"></div>
    </div>
    </section>`
} 

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

/////     name_box_img //will not include for now
//point to image in img folder. should be a specific size

/////     next_button_img
//added in html style

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