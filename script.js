// ===============================
// PAGE LOADED
// ===============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});


// ===============================
// CARD FADE ANIMATION
// ===============================

const card = document.querySelector(".card");

card.animate(

[
    {
        opacity:0,
        transform:"translateY(40px)"
    },
    {
        opacity:1,
        transform:"translateY(0px)"
    }
],

{
    duration:900,
    easing:"ease-out",
    fill:"forwards"
}

);


// ===============================
// BUTTON RIPPLE
// ===============================

const buttons=document.querySelectorAll(".btn");

buttons.forEach(button=>{

button.addEventListener("mousemove",function(e){

const rect=this.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

this.style.setProperty("--x",x+"px");
this.style.setProperty("--y",y+"px");

});

});


// ===============================
// LOGO FLOAT
// ===============================

const logo=document.querySelector(".logo-box");

let direction=1;

setInterval(()=>{

if(direction===1){

logo.style.transform="translateY(-6px)";

direction=0;

}else{

logo.style.transform="translateY(0px)";

direction=1;

}

},1800);


// ===============================
// CARD TILT
// ===============================

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*8;

const rotateX=((y/rect.height)-0.5)*-8;

card.style.transform=

`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.01)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";

});


// ===============================
// BUTTON CLICK
// ===============================

buttons.forEach(btn=>{

btn.addEventListener("click",()=>{

btn.style.transform="scale(.95)";

setTimeout(()=>{

btn.style.transform="";

},180);

});

});


// ===============================
// PARALLAX BACKGROUND
// ===============================

document.addEventListener("mousemove",(e)=>{

const glow1=document.querySelector(".one");
const glow2=document.querySelector(".two");

let x=e.clientX/window.innerWidth;
let y=e.clientY/window.innerHeight;

glow1.style.transform=

`translate(${x*25}px,${y*25}px)`;

glow2.style.transform=

`translate(${-x*25}px,${-y*25}px)`;

});


// ===============================
// AUTO BUTTON GLOW
// ===============================

setInterval(()=>{

buttons.forEach(btn=>{

btn.style.filter="brightness(1.18)";

setTimeout(()=>{

btn.style.filter="brightness(1)";

},800);

});

},2200);


// ===============================
// END
// ===============================
// ===============================
// 5 Second Countdown

let seconds = 59;

// Ye wahi link hona chahiye jo "See Ads Proofs" button ka hai.
const redirectURL = "https://t.me/+PrLuWP-LxPk2NjI1"; // Change this

const countdown = document.getElementById("countdown");

// Agar button ka id="adsProofBtn" hai to usko bhi same link de do
const adsBtn = document.getElementById("adsProofBtn");

if(adsBtn){
    adsBtn.href = redirectURL;
}

function updateCountdown(){

    countdown.innerHTML = `0:0${seconds}`;

}

updateCountdown();

const timer = setInterval(function(){

    seconds--;

    if(seconds >= 0){

        updateCountdown();

    }

    if(seconds === 0){

        clearInterval(timer);

        window.location.href = redirectURL;

    }

},1000);
