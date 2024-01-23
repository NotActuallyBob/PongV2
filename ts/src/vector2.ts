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
}