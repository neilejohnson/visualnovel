import { nextNode } from './src/nodeHandler.js'
import { setup } from './src/setup.js'

const game = setup();

console.log(game)

nextNode(game);
