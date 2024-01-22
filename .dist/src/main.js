import Paddle from "./paddle";
var canvas = document.getElementById("gameCanvas");
canvas.width = 200;
canvas.height = 200;
var ctx = canvas.getContext("2d");
var leftPaddle = new Paddle(100, 300);
