const EYE_DISTANCE = 15;
const EYE_ANGLE = 1;

class Eye {
  constructor(snake) {
    this.snake = snake;
  }

  update() {}

  draw() {
    let eyePos = {
      x: this.snake.x + Math.cos(this.snake.angle - EYE_ANGLE) * EYE_DISTANCE,
      y: this.snake.y + Math.sin(this.snake.angle - EYE_ANGLE) * EYE_DISTANCE,
    };

    this.snake.game.screen.drawCircle(eyePos, "eye");

    eyePos = {
      x: this.snake.x + Math.cos(this.snake.angle + EYE_ANGLE) * EYE_DISTANCE,
      y: this.snake.y + Math.sin(this.snake.angle + EYE_ANGLE) * EYE_DISTANCE,
    };

    this.snake.game.screen.drawCircle(eyePos, "eye");
  }
}
