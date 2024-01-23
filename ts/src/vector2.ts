export class Vector2 {
    private x: number;
    private y: number;

    constructor(x: number, y:number) {
        this.x = x;
        this.y = y;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }

    public move(move: Vector2) {
        this.x += move.getX();
        this.y += move.getY();
    }

    public setY(y: number) {
        this.y = y;
    }

    public setX(x: number) {
        this.x = x;
    }

    public negateX() {
        this.x *= -1;
    }
    public negateY() {
        this.y *= -1;
    }
}