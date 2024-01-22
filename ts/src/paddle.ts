import { Vector2 } from "./vector2.js";

export class Paddle {
    private position: Vector2;
    private size: Vector2;

    constructor(position: Vector2) {
        this.position = position;
        this.size = new Vector2(20, 100);
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.fillRect(this.position.getX(), this.position.getY(), this.size.getX(), this.size.getY()); 
    }
}