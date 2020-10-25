export default class Game {
    constructor(data, config, art) {
        this.data = data;
        this.config = config;
        this.art = art;
        this.currentNode = data['1'];
        this.audio = []
    };
};