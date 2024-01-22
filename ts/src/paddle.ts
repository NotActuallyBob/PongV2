class Paddle {
    private positionX: number;
    private positionY: number;

    constructor(positionX: number, positionY: number) {
        this.positionX = positionX;
        this.positionY = positionY;
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.rect(this.positionX, this.positionY, 100, 50);
    }
}

export default Paddle;