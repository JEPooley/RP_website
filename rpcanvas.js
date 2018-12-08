var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = "fixed";
var ctx = canvas.getContext('2d');

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var p1 = new Parallelogram([0,0], window.innerHeight*0.95, window.innerWidth*0.2, 78, 15, 0.45);
    p1.start = [-p1.xoffset, canvas.height+p1.yoffset];
    var p2 = new Parallelogram([0,0], window.innerHeight*0.9, window.innerWidth*0.08, 78, 15, 0.26);
    p2.start = [window.innerWidth*0.115, canvas.height+(1.1 * p2.yoffset)];

    p1.draw();
    p2.draw();
}

function Parallelogram(start, height, width, angle1Deg, angle2Deg, fadeHeight){
    this.angle1Rad = (angle1Deg * Math.PI)/180;
    this.angle2Rad = (angle2Deg * Math.PI)/180;
    this.xoffset = height / Math.tan(this.angle1Rad);
    this.yoffset = width * Math.tan(this.angle2Rad);
    this.start = start;
    this.height = height;
    this.width = width;
    this.fadeHeight = fadeHeight;

    this.draw = function(){
        var grd=ctx.createLinearGradient(this.start[0], this.start[1],this.start[0]+this.xoffset+this.width, this.start[1]-this.height-this.yoffset);
        grd.addColorStop(this.fadeHeight,"rgba(255, 255, 255, 0)");
        grd.addColorStop(1,"rgba(255, 255, 255, 0.3)");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.moveTo(this.start[0], this.start[1]);
        ctx.lineTo(this.start[0]+this.xoffset, this.start[1]-this.height);
        ctx.lineTo(this.start[0]+this.xoffset+this.width, this.start[1]-this.height-this.yoffset);
        ctx.lineTo(this.start[0]+this.width, this.start[1]-this.yoffset);
        ctx.closePath();
        ctx.fill();
    }   

};

var p1 = new Parallelogram([0,0], window.innerHeight*0.95, window.innerWidth*0.2, 78, 15, 0.45);
p1.start = [-p1.xoffset, canvas.height+p1.yoffset];
var p2 = new Parallelogram([0,0], window.innerHeight*0.9, window.innerWidth*0.08, 78, 15, 0.26);
p2.start = [window.innerWidth*0.115, canvas.height+(1.1 * p2.yoffset)];

p1.draw();
p2.draw();