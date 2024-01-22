import { Paddle } from "./paddle.js";
import { Vector2 } from "./vector2.js";

const canvas: HTMLCanvasElement = document.getElementById("gameCanvas") as HTMLCanvasElement;
canvas.width = 1000; 
canvas.height = 600; 
var ctx: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D; 

const leftPaddle: Paddle = new Paddle(new Vector2(50, 0)); 

leftPaddle.draw(ctx); 
