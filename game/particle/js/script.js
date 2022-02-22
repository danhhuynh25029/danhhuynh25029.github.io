var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight*0.9;
var bg = 'white';
function setColor(color){
    bg = color;
}
window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight*0.9;
    ctx.fillStyle = "white";
    ctx.fillRect(10,20,150,50);
})
var hue = 0;
const mouse = {
    x : null,
    y : null
}
canvas.addEventListener("click",function(event){
    mouse.x = event.x;
    mouse.y = event.y;
});
canvas.addEventListener("mousemove",function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    init();
});
class Particle{
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        // this.x = Math.random()*canvas.width;
        // this.y = Math.random()*canvas.height;
        this.size = Math.random()*15 + 1;
        this.speedX = Math.random()*3 - 1.5;
        this.speedY = Math.random()*3 - 1.5;
        this.color = `hsl(${hue},100%,50%)`;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.size > 0.2) this.size -= 0.1;
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI * 2);
        ctx.fill();
    }
}
p = [];
function init(){
    for(let i = 0 ; i < 3 ; i++){
        p.push(new Particle());
    }
}
// init();
function handle(){
    for(let i = 0 ; i < p.length ; i++){
        p[i].update();
        p[i].draw();
        for(let j = i ; j < p.length ; j++){
            const dx = p[i].x - p[j].x;
            const dy = p[i].y - p[i].y;
            const dis = Math.sqrt(dx*dx + dy*dy);
            if(dis < 100){
                ctx.beginPath();
                ctx.strokeStyle = p[i].color;
                ctx.lineWidth = p[i].size/10;
                ctx.moveTo(p[i].x,p[i].y);
                ctx.lineTo(p[j].x,p[j].y);
                ctx.stroke();
                ctx.closePath();
            }
        }
        if(p[i].size <= 0.3){
            p.splice(i,1);
            i--;
        }
        
    }
}
handle();
function drawCircle(){
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(mouse.x,mouse.y,10,0,Math.PI*2);
    ctx.fill();
}
function animate(){
    // ctx.fillStyle = 'rgba(0,0,0/,0.02)';
    ctx.fillStyle  = bg; 
    ctx.fillRect(0,0,canvas.width,canvas.height);
    // drawCircle();
    handle();
    hue += 0.5
    requestAnimationFrame(animate);
}
animate()
