import { data, config } from '../data.js'

console.log(data, config);

export default class Game {
    constructor(data, config) {
        this.data = data;
        if(config["default_font"]){ this.font = config["default_font"] };
        if(config["default_font_size"]){ this.fontSize = config["default_font_size"] };
        if(config["default_text_color"]){ this.textColor = config["default_text_color"] };
        if(config["text_box_img"]){ this.textBoxImage = config["text_box_img"] };
        if(config["name_box_img"]){ this.nameBoxImage = config["name_box_img"] };
        if(config["default_background_color"]){ this.backgroundColor = config["default_background_color"] };
    }
}

// const config = {
//     "default_font": "",
//     "default_font_size": "16",
//     "default_text_color": "white",
//     "default_background_color": "",
//     "text_box_img": "text-window.png",
//     "name_box_img": "",
//     "next_button_img": "",
//     "next_button_img_hover": "",
//     "option_button_color": "",
//     "option_button_color_hover": "",
//     "text_speed": "",
//     "text_sound": ""
// }