class Snake {
  constructor(game) {
    this.game = game;
    this.x = GAME_WIDTH / 2;
    this.y = GAME_HEIGHT / 2;

    this.speed = SNAKE_SPEED_NORMAL;
    this.mouseDown = false;

    this.angle = 0;

    this.tailSnake = [];

    this.eye = new Eye(this);

    this.createTail();

    this.onMouseDown();
    this.onMouseUp();
    this.listenMouseEvent();
  }

  onMouseDown() {
    this.game.canvas.addEventListener("mousedown", () => {
      this.mouseDown = true;
    });
  }

  onMouseUp() {
    this.game.canvas.addEventListener("mouseup", () => {
      this.mouseDown = false;
    });
  }

  listenMouseEvent() {
    this.game.canvas.addEventListener("mousemove", (e) => {
      const rect = this.game.canvas.getBoundingClientRect();
      this.processMouseMove({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    });
  }

  processMouseMove(mousePos) {
    this.angle = Math.atan2(
      mousePos.y - SCREEN_HEIGHT / 2,
      mousePos.x - SCREEN_WIDTH / 2
    );
  }

  createTail() {
    for (let i = 0; i < 1200; i++) {
      this.tailSnake.push({
        x: this.x - i * this.speeds,
        Y: this.y,
      });
    }
  }

  update() {
    this.speed = this.mouseDown ? SNAKE_SPEED_MAX : SNAKE_SPEED_NORMAL;

    let newTailPosition = {
      x: this.x + this.speed * Math.cos(this.angle),
      y: this.y + this.speed * Math.sin(this.angle),
    };

    this.tailSnake.unshift(newTailPosition);
    this.tailSnake.pop();

    this.x = newTailPosition.x;
    this.y = newTailPosition.y;
  }

  draw() {
    /* for (let i = this.tailSnake.length - 3; i >= 0; i--) {
      console.log("vc");
      this.game.screen.drawCircle(
        {
          x: this.tailSnake[i].x,
          y: this.tailSnake[i].y,
        },
        "shadow"
      );
    }*/
    for (let i = this.tailSnake.length - 1; i >= 0; i--) {
      if (i % 4 === 0)
        this.game.screen.drawCircle(
          {
            x: this.tailSnake[i].x,
            y: this.tailSnake[i].y,
          },
          "snake"
        );
    }

    this.game.screen.drawCircle(
      {
        x: this.tailSnake[0].x,
        y: this.tailSnake[0].y,
      },
      "snake"
    );

    this.eye.draw();
  }
}
