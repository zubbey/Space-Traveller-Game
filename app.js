import Game from "./src/Game.js";

const app = document.querySelector('#app');
const canvas = document.createElement('canvas');

const game = new Game(canvas, app);
let gameLoopId;

const gameLoop = () => {
    game.start();
    gameLoopId = requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

addEventListener('resize', () => {
    Game.resize(canvas);
})