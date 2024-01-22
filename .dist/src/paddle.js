var Paddle = /** @class */ (function () {
    function Paddle(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
    }
    Paddle.prototype.draw = function (ctx) {
        ctx.fillRect(this.positionX, this.positionY, 100, 50);
    };
    return Paddle;
}());
export default Paddle;
