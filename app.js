const clrs=document.querySelectorAll('.clr');
console.log(clrs) 
const canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let clearBtn = document.querySelector('.clear');
let saveBtn = document.querySelector('.save');
// document gdg html deer bga buh code
// window gdg n ajliiin huudas
//getContext gdg n zuragiin hemjees
canvas.width = window.innerWidth;
canvas.height = window.innerHeight
ctx.lineWidth = 5
// zuraasiin urgun
let prevX=null;
let prevY=null;
let draw = false;
// addEventListener -> mousemove
// mousedown -> mouse deer darahj ued\
// mouseup -> 
let clrArr = Array.from(clrs);
console.log(clrs)
//array
clrArr.forEach(clr=>{
    clr.addEventListener('click', ()=>{
        ctx.strokeStyle = clr.dataset.clr; // zuraasiin ongiig oorchloh
    });
});
//forEach
window.addEventListener('mousedown', ()=>{ draw=true ;});
window.addEventListener('mouseup', ()=>{ draw=false ;});
window.addEventListener('mousemove', (e)=>{
    if(draw==false || prevX==null || prevY==null){
        prevX=e.clientX;
        prevY=e.clientY;
    }
    let mouseX=e.clientX;
    let mouseY=e.clientY;
    ctx.beginPath(e.clientX, e.clientY); //zuraasiin zamiig ehluuleh
    ctx.moveTo(prevX, prevY); //mouse hudluh bairshil
    ctx.lineTo(mouseX, mouseY); // mousenii bairshild zurah
    ctx.stroke(); //zursan zuraasiig gargaj ireh
    prevX = e.clientX;
    prevY = e.clientY;
});
clearBtn.addEventListener('click', ()=>{
    ctx.clearRect(0,0, canvas.width, canvas.height); //rect-zurtsan bga talbai
});
saveBtn.addEventListener('click', ()=>{
    let data = canvas.toDataURL('imag/jpg');
    let a = document.createElement('a');
    a.href=data;
    a.download="test.jpg";
    a.click();
});
let selectBtn=document.querySelector('.select');
var select = document.querySelector('.selector');
selectBtn.addEventListener('click', ()=>{
    console.log(select.value);
    ctx.lineWidth=select.value;
});
let input = document.querySelector('.input');   
console.log(input.value)
let colorBtn=document.querySelector('.selector1')
colorBtn.addEventListener('click', ()=>{
    ctx.strokeStyle = input.value;
    console.log(input.value)
});