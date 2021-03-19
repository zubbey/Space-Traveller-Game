import Projectile from "./Projectile.js";

class Player {
    constructor(game) {
        this.game = game;
        this.ctx = game.ctx;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.w = 113;
        this.h = 160;
        this.position = {
            x: (this.gameWidth - this.w) / 2,
            y: (this.gameHeight - this.h) - 20
        }
        this.speed = 0;
        this.maxSpeed = 5;
        this.currentIndex = 0;
        this.projectiles = [];
        this.images = [];

        this.createImages();
    }

    draw() {
        this.projectiles.forEach((projectile, index) => {
            if(projectile.position.y < 0) this.projectiles.slice(index, 1);
            projectile.draw(this.ctx);
        }) 
        this.ctx.drawImage(this.images[this.currentIndex], this.position.x, this.position.y, this.w, this.h);
    }

    update() {
        this.position.x += this.speed;
    }

    moveRight() {        
        if(this.position.x > this.gameWidth - this.w) return this.position.x = this.gameWidth - this.w;
        if(this.currentIndex < 4) {
            this.currentIndex += 1
        }
        if(this.currentIndex > 4) {
            this.currentIndex -= 1;
        }
        this.speed = this.maxSpeed;
    }

    moveLeft() {
        if(this.position.x < 0) return this.position.x = 0

        if(this.currentIndex === 0) {
            this.currentIndex = 8;
        } else if(this.currentIndex < 11) {
            this.currentIndex += 1
        }
        this.speed =- this.maxSpeed;
    }

    stopMoving() {
        this.speed = 0;
        if(this.currentIndex === 11) {
            setTimeout(() => {
                for(let i=0; i<5; i++) {
                    this.currentIndex -= 1
                }
            }, 0);
        }
        if(this.currentIndex === 4) {
            setTimeout(() => {
                for(let i=0; i<4; i++) {
                    this.currentIndex -= 1
                }
            }, 0);
        }
    }

    shoot() {
        this.projectiles.push(new Projectile(this.game))
    }

    createImages() {
        for (let i = 0; i < 12; i++) {
            let image =`image${i}`;
            image = new Image();
            
            image.src = `../assets/img/protector/${i}.png`;
            this.images.push(image);
        }
    }
}

export default Player;