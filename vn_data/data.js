const config = {
    "default_font": "",
    "default_font_size": "16",
    "default_text_color": "white",
    "default_background_color": "",
    "text_box_img": "text-window.png",
    "name_box_img": "",
    "next_button_img": "",
    "next_button_img_hover": "",
    "option_button_color": "",
    "option_button_color_hover": "",
    "text_speed": "",
    "text_sound": "",
    "start_screen": "start_screen.jpg",
    "start_button": "start_button.jpg"
}

const data = {
    "1": {
        "node_id": "1",
        "display_mode": "text",
        "sound_volume": "0.3",
        "loop_sound": "guitar.mp3",
        "loop_sound_volume": "0.5",
        "setting_back": "hht_rough_forest01.19.jpg",
        "name": "Jordan",
        "name_position": "left",
        "line_1_text": "Hey! Just wanted to say hi and touch",
        "line_2_text": "base with you, this week has been ",
        "line_3_text": "crazy. What have you been up to?",
        "option_1_text": "tset",
        "option_2_text": "this is a test ",
        "option_3_text": "another test",
        "img_left": "char.png",
        "output": "2"
    },
    "2": {
        "node_id": "2",
        "display_mode": "scene",
        "setting_back": "hht_rough_forest01.19.jpg",
        "setting_back_opacity": "0.8",
        "img_center": "char.png",
        "scene_length": "5000",
        "output": "3"
    },
    "3": {
        "node_id": "3",
        "display_mode": "option",
        "fade_out_active_loop": "y",
        "setting_back": "hht_rough_forest01.19.jpg",
        "option_description": "What would you like to do?",
        "option_1_text": "Go to work.",
        "option_2_text": "Stay home.",
        "option_3_text": "Do literally nothing.",
        "option_1_output": "4",
        "option_2_output": "4",
        "option_3_output": "4",
        "img_right": "char.png"
    },
    "4": {
        "node_id": "4",
        "display_mode": "end",
        "setting_back": "hht_rough_forest01.19.jpg"
    }
}

export { config, data };