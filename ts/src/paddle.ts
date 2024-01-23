import { InputHandler } from "./inputHandler.js";
import { Vector2 } from "./vector2.js";

export class Paddle {
    private position: Vector2;
    private size: Vector2;
    private speed: number = 10;
    public inputHandler: InputHandler;

    constructor(position: Vector2, type: string) {
        this.position = position;
        this.size = new Vector2(20, 100);

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
    }

    public moveDown() {
        this.position.move(new Vector2(0, this.speed));
    }
}