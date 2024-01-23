import { Game } from "./game.js";
import { Paddle } from "./paddle.js";
import { Vector2 } from "./vector2.js";

const canvas: HTMLCanvasElement = document.getElementById("gameCanvas") as HTMLCanvasElement;

const game: Game = new Game(canvas);
game.start();
