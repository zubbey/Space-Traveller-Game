import Player from "./Player.js";
import inputEventHandler from "./inputEventHandler.js";
import Enemy from "./Enemy.js";

class Game {
    constructor(canvas, app) {
        app.appendChild(canvas);
        this.constructor.resize(canvas);

        this.app = app;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.gameWidth = canvas.width;
        this.gameHeight = canvas.height;
        this.bgSpeed = 0.5;
        this.bgFrame = 0;
        this.player = new Player(this);
        this.enemies = [];
        new inputEventHandler(this);

        this.createEnemy();
    }
    
    static resize(canvas) {
        canvas.width = innerWidth - 100;
        canvas.height = innerHeight - 100;
    }

    start() {
        // this.ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        // this.ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);
        this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
        this.draw();
        this.update();
    }
    
    draw() {
        this.player.draw(this.ctx);
        //draw enemies
        
        this.enemies.forEach((enemy, index) => {
            enemy.draw();
        })
        // console.log(this.enemies)
    }
    
    update() {
        // animate background
        this.bgFrame += this.bgSpeed;
        this.player.update();
        this.animateBackground();
    }
    
    createEnemy() {
        //create enemies
        for (let i = 0; i < 3; i++) {
            this.enemies.push(new Enemy(this, {x: this.randomPositon(), y: 20}));
        }
    }
    
    randomPositon() {
        let randomValue;
        if(this.enemies.length === 0) {
            randomValue = Math.floor(Math.random() * (this.gameWidth - 113))
        } else {
           this.enemies.forEach((enemy, index) => {
                console.log('%c enemyPosition: ' + enemy.position.x, 'color: #00bcd4');
                // if(enemy.position.x)
               randomValue = Math.floor(Math.random() * (this.gameWidth - 113))
            })

            console.log('gameWidth: ' + this.gameWidth);
            console.log('\n')
            console.log('%c randomValue: ' + randomValue, 'color: #bada55');
        }
        
        return randomValue
    }

    animateBackground() {
        this.canvas.style.backgroundPositionY = `${this.bgFrame}px`;
    }
}

export default Game;