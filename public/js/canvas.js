// --------Canvas----------

const canvas = document.getElementById('bg-firework');
const c = canvas.getContext('2d');

let oldinnerWidth = innerWidth;
let oldinnerHeight = innerHeight;

canvas.width = innerWidth;
canvas.height = innerHeight;


let x = Math.random() * (canvas.width / 2);
let y = Math.random() * (canvas.height / 2);
let x2 = Math.random() * canvas.width;
let y2 = Math.random() * canvas.height;

let particules = [];
let particules2 = [];
animate();
class Fireworkeffect{
    constructor(x, y, color, velocity){
        this.x = x;
        this.y = y;
        this.color = color;
        this.velocity = velocity;
    }

    draw(){
        c.beginPath();
        c.font = "11px Lobster";
        c.fillText('dev', this.x, this.y);
        c.fillStyle = this.color;
        c.fill();
    }

    update(){
        this.draw();
        this.x = this.x + this.velocity.x * 25;
        this.y = this.y + this.velocity.y * 25;
    }

}
function animate(){
    requestAnimationFrame(animate);
    if(oldinnerHeight != innerHeight || oldinnerWidth != innerWidth){
        oldinnerWidth = innerWidth;
        oldinnerHeight = innerHeight;
        canvas.width = innerWidth;
        canvas.height = innerHeight;
    }
    c.fillStyle = 'rgba(22,22,22,0.8)';
    c.fillRect(0, 0, canvas.width, canvas.height);
    particules.forEach(particule =>{
        particule.update();
    })
    particules2.forEach(particule =>{
        particule.update();
    })
}
function animateClear(){
    let nbrPart = 25;
    x = Math.random() * canvas.width;
    y = Math.random() * canvas.height;
    x2 = Math.random() * canvas.width;
    y2 = Math.random() * canvas.height;
    for (let i = 0; i < nbrPart; i++) {
        particules.push(new Fireworkeffect(x, y, '#2b90c8',{x: Math.random() - 0.5, y: Math.random() - 0.5})) 
        particules2.push(new Fireworkeffect(x2, y2, '#ab6f23',{x: Math.random() - 0.5, y: Math.random() - 0.5})) 
    }
}

setInterval(() => {
    animateClear(); 
}, 3000);
