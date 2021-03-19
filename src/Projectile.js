class Projectile {
    constructor(game) {
        this.game = game;
        this.size = 5;
        this.speed = 10;
        this.position = {
            x: game.player.position.x + game.player.w / 2,
            y: game.player.position.y
        }
    }

    draw(ctx) {
        ctx.fillStyle = '#fff3c7';
        ctx.strokeStyle = '#ff5722';
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        this.update();
    }

    update() {
        this.position.y -= this.speed;
    }
}

export default Projectile;