class Game {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = SCREEN_WIDTH;
    this.canvas.height = SCREEN_HEIGHT;
    document.body.appendChild(this.canvas);

    this.snake = new Snake(this);
    this.bg = new BG(this);
    this.screen = new Screen(this);

    this.loop();
  }

  loop() {
    this.update();
    this.draw();
    setTimeout(() => {
      this.loop();
    }, 20);
  }

  draw() {
    this.snake.update();
    this.bg.update();
    this.screen.update();
  }

  clearScreen() {
    this.ctx.fillStyle = "#f2f2f2";
    this.ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
  }

  update() {
    this.clearScreen();
    this.bg.draw();
    this.snake.draw();
    /*this.screen.drawCircle({
      x: 2400,
      y: 2400,
    });*/
  }
}

const game = new Game();
