import { InputHandler } from "./inputHandler.js";
import { Vector2 } from "./vector2.js";

export class Paddle {
    private canvas: HTMLCanvasElement;
    private position: Vector2;
    private size: Vector2;
    private speed: number = 20;
    public inputHandler: InputHandler;
    public type: string;

    constructor(canvas: HTMLCanvasElement, position: Vector2, type: string) {
        this.canvas = canvas;
        this.position = position;
        this.size = new Vector2(20, 100);
        this.type = type;

        if(type === "left") {
            this.inputHandler = new InputHandler("KeyW", "KeyS");
        } else {
            this.inputHandler = new InputHandler("ArrowUp", "ArrowDown");
        }
        
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.fillRect(this.position.getX(), this.position.getY(), this.size.getX(), this.size.getY()); 
        console.log("draw");
    }

    public moveUp(){
        this.position.move(new Vector2(0, -this.speed));
        if(this.position.getY() + this.size.getY() < 0) {
            this.position.setY(this.canvas.height);
        }
    }

    public moveDown() {
        this.position.move(new Vector2(0, this.speed));
        if(this.position.getY() > this.canvas.height) {
            this.position.setY(0 - this.size.getY());
        }
    }

    public getPosition(): Vector2 {
        return this.position;
    }

    public getSize(): Vector2 {
        return this.size;
    }
}
