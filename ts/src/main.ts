import { Paddle } from "./paddle.js";

const canvas: HTMLCanvasElement = document.getElementById("gameCanvas") as HTMLCanvasElement;
canvas.width = 1000; 
canvas.height = 600; 
var ctx: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D; 

const leftPaddle: Paddle = new Paddle(100, 300); 
leftPaddle.draw(ctx); 