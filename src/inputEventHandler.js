class inputEventHandler {
    constructor(game) {
        addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowRight' || 'Right':
                    game.player.moveRight();
                    break;

                case 'ArrowLeft' || 'Left':
                    game.player.moveLeft();
                    break;

                case ' ' || 'Space':
                    game.player.shoot();
                    break;
            
                default:
                    break;
            }
        })

        addEventListener('keyup', (e) => {
            switch (e.key) {
                case 'ArrowRight' || 'Right':
                    if(game.player.speed > 0) game.player.stopMoving();
                    break;

                case 'ArrowLeft' || 'Left':
                    if(game.player.speed < 0) game.player.stopMoving();
                    break;
                default:
                    break;
            }
        })
    }
}

export default inputEventHandler;