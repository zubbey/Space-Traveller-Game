class Enemy {
    constructor(game, position) {
        this.game = game;
        this.ctx = game.ctx;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.w = 113;
        this.h = 160;
        this.position = position;
        this.speed = 0;
        this.maxSpeed = 5;
        this.projectiles = [];
        this.image = null;
        this.createImage();
    }

    draw() {
        // this.ctx.translate()
        // this.ctx.rotate(Math.PI / 6);
        this.ctx.drawImage(this.image, this.position.x, this.position.y, this.w, this.h);
    }

    update() {

    }

    createImage() {
        const randomSource = Math.floor(Math.random() * 2);
        const image = new Image();
        image.src = `../assets/img/alien${randomSource}.png`;
        this.image = image;
    }
}

export default Enemy;