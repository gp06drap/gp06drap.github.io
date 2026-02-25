const submitB=document.querySelector("button");
const userInput=document.querySelector("#guess");
const response=document.querySelector("#answer")
let guesses;
const goal=parseInt(Math.random()*100)+1;

submitB.addEventListener("click", function(){
    let value=userInput.value;
    let side;
    if (guesses===null){
        guesses=value;
    }else{
        guesses=guesses+" "+value;
    }
    if(value!=goal){
        if(value<goal){
            side="low";
        }else{
            side="high";
        }
        response.innerHTML=`<p>Previous guesses: ${guesses}</p><p style="background-color:red;color:white;">Wrong</p><p>Last guess was too ${side}!</p`;
    }else{
        response.innerHTML=`<p>Previous guesses: ${guesses}</p><p style="background-color:green;color:white;">Congratulations! You got it right!</p>`;
    }
});

const buttonA=document.querySelector("#button_A");
const headingA=document.getElementById("heading_A");

buttonA.addEventListener('click', ()=>{
    const name=prompt("What is your name?");
    alert('Hello '+name+', nice to see you!');
    headingA.textContent=`Welcome ${name}`;
});

const textBox=document.querySelector("#textBox");
const out=document.querySelector("#output");
textBox.addEventListener("keydown", (event)=>{
    out.textContent=`You pressed "${event.key}".`
});

const buttonB=document.querySelector("#button_B");
const greeting=document.getElementById("greeting");

buttonB.addEventListener('click', ()=>{
    const name=prompt("What is your name?");
    greeting.textContent=`Hello! ${name}, nice to see you!`;
});