const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
  
const rand = function(num) {
return Math.floor(Math.random() * num) + 1;
};
  
colorArray = ['red', 'green', 'orange', 'blue', 'yellow'];

const point = {
    x      : rand(canvas.width - 50),
    y      : rand(canvas.height - 50),
    width  : 50,
    height : 50,
    color  : colorArray[rand(5)-1]
};

const draw = function() {
    context.fillStyle = point.color;
    context.fillRect(point.x, point.y, point.width, point.height);
};

draw();