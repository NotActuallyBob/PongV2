import { Paddle } from "./paddle.js";

export class Game {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    
    private canvasWidth: number = 1000;
    private canvasHeight: number = 600;

    private leftPaddle: Paddle;
    private rightPaddle: Paddle;

    constructor(canvas: HTMLCanvasElement, leftPaddle: Paddle, rightPaddle: Paddle) {
        this.canvas = canvas;
        this.initCanvas();
        this.context = canvas.getContext("2d") as CanvasRenderingContext2D;

        this.leftPaddle = leftPaddle;
        this.rightPaddle = rightPaddle;

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

        this.leftPaddle.draw(this.context);
        this.rightPaddle.draw(this.context);
    }

    private clearCanvas() {
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }
}