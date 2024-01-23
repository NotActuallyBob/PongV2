import { CollisionChecker } from "./collisionChecker.js";
import { Paddle } from "./paddle.js";
import { Vector2 } from "./vector2.js";

export class Ball {
    private position: Vector2;
    private velocity: Vector2;
    private size: Vector2;

    private canvas: HTMLCanvasElement;

    private leftPaddle: Paddle;
    private rightPaddle: Paddle;

    constructor (canvas: HTMLCanvasElement, leftPaddle: Paddle, rightPaddle: Paddle) {
        this.canvas = canvas;
        this.leftPaddle = leftPaddle;
        this.rightPaddle = rightPaddle;

        this.position = new Vector2(this.canvas.width / 2, this.canvas.height / 2);
        this.size = new Vector2(25, 25);
        this.velocity = new Vector2(10, 4);
    }

    public move() {
        if(this.isCollidingWithAnyPaddle()) {
            this.velocity.negateX();
        }
        if(this.isCollidingWithWall()) {
            this.velocity.negateY();
        }

        this.position.move(this.velocity);
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.fillRect(this.position.getX(), this.position.getY(), this.size.getX(), this.size.getY());
    }

    public getPosition(): Vector2 {
        return this.position;
    }

    public getSize(): Vector2 {
        return this.size;
    }

    public getVelocity(): Vector2 {
        return this.velocity;
    }

    private isCollidingWithAnyPaddle(): boolean {
        return CollisionChecker.isBallAndPaddleColliding(this, this.leftPaddle) || CollisionChecker.isBallAndPaddleColliding(this, this.rightPaddle);
    }

    private isCollidingWithWall(): boolean {
        return this.position.getY() <= 0 || this.position.getY() + this.size.getY() >= this.canvas.height;
    }
}