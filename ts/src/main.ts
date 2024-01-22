import Paddle from "./paddle";

const canvas: HTMLCanvasElement = document.getElementById("gameCanvas") as HTMLCanvasElement;
canvas.width = 200;
canvas.height = 200;
var ctx: CanvasRenderingContext2D = canvas.getContext("2d");

const leftPaddle: Paddle = new Paddle(100, 300);