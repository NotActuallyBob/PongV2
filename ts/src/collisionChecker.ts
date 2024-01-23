import { Ball } from "./ball.js";
import { Paddle } from "./paddle.js";
import { Vector2 } from "./vector2.js";

export class CollisionChecker {
    static isBallAndPaddleColliding(ball:Ball, paddle: Paddle): boolean {
        const paddlePosition: Vector2 = paddle.getPosition();
        const paddleSize: Vector2 = paddle.getSize();

        const ballPosition: Vector2 = ball.getPosition();
        const ballSize: Vector2 = ball.getSize();

        const insideYRange: boolean = 
            paddlePosition.getY() <= ballPosition.getY() + ballSize.getY() && 
            paddlePosition.getY() + paddleSize.getY() >= ballPosition.getY();

        if(!insideYRange) {
            return false;
        }

        if(paddle.type === "left") {
            const paddleRightSideX: number = paddlePosition.getX() + paddleSize.getX();
            if(paddleRightSideX <= ballPosition.getX() && paddleRightSideX - ball.getVelocity().getX() > ballPosition.getX()) {
                return true;
            }
        } else {
            const ballRightSideX: number = ballPosition.getX() + ballSize.getX();
            if (paddlePosition.getX() >= ballRightSideX && paddlePosition.getX() < ballRightSideX + ball.getVelocity().getX()) {
                console.log("Collision");
                return true;
            }
        }
        return false;
    }
}