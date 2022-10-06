const canvas=document.getElementById("canvas")
const ctx=canvas.getContext('2d')

const input=document.getElementById("input");        
const circleradius=230;

canvas.fillStyle='#f75252';
canvas.stroke='#f75252';
   

// ctx.stroke()

function show(){
    const n=input.value;
    if(n>2){
ctx.clearRect(0,0,490,470)
var angle=2*Math.PI/n;

ctx.beginPath()
ctx.moveTo(240+circleradius,240);
for(let i=1;i<n;i++){
ctx.lineTo(240+circleradius*Math.cos(angle*i),240-circleradius*Math.sin(angle*i));
}

ctx.closePath()
ctx.strokeStyle='red';//`rgb(${parseInt(Math.random()*250)},${parseInt(Math.random()*250)},${parseInt(Math.random()*250)})`
ctx.lineWidth='5';
ctx.fillStyle='rgb(240, 66, 23)';
  
ctx.fill();
ctx.stroke();
ctx.closePath();

    }
    if(n<=2){
        alert("Number should be greater the 2")
    }
}
