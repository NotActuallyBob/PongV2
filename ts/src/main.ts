import { Game } from "./game.js";
import { Paddle } from "./paddle.js";
import { Vector2 } from "./vector2.js";

const canvas: HTMLCanvasElement = document.getElementById("gameCanvas") as HTMLCanvasElement;

const leftPaddle: Paddle = new Paddle(new Vector2(50, 0), "left"); 
const rightPaddle: Paddle = new Paddle(new Vector2(950, 0), "right"); 

const game: Game = new Game(canvas, leftPaddle, rightPaddle);
game.start();
