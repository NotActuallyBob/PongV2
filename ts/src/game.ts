import { Ball } from "./ball.js";
import { Paddle } from "./paddle.js";
import { Vector2 } from "./vector2.js";

export class Game {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    
    private canvasWidth: number = 1000;
    private canvasHeight: number = 600;

    private leftPaddle: Paddle;
    private rightPaddle: Paddle;
    private ball: Ball;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.initCanvas();
        this.context = canvas.getContext("2d") as CanvasRenderingContext2D;

        this.leftPaddle = new Paddle(canvas, new Vector2(50, 0), "left"); 
        this.rightPaddle = new Paddle(canvas, new Vector2(950, 0), "right"); 
        this.ball = new Ball(this.canvas, this.leftPaddle, this.rightPaddle);

        this.update = this.update.bind(this);
    }

    private initCanvas() {
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;
    }

    public start() {
        setInterval(this.update, 20);
    }

    private update() {
        this.clearCanvas();

        if(this.leftPaddle.inputHandler.isUpPressed) {
            this.leftPaddle.moveUp();
        } else if(this.leftPaddle.inputHandler.isDownPressed) {
            this.leftPaddle.moveDown();
        }

        if(this.rightPaddle.inputHandler.isUpPressed) {
            this.rightPaddle.moveUp();
        } else if(this.rightPaddle.inputHandler.isDownPressed) {
            this.rightPaddle.moveDown();
        }

        this.ball.move();

        this.ball.draw(this.context);
        this.leftPaddle.draw(this.context);
        this.rightPaddle.draw(this.context);
    }

    private clearCanvas() {
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }
}