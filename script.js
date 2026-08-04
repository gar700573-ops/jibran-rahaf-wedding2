/* =====================================
   Wedding Invitation JavaScript
   Jibran & Rahaf
===================================== */


/* ================= Loading ================ */


window.addEventListener("load",()=>{

setTimeout(()=>{

let loading=document.getElementById("loading");

loading.style.opacity="0";


setTimeout(()=>{

loading.remove();

},1000);


},1500);


});





/* ================= Elements ================= */




const envelope=document.getElementById("envelope");

const envelopeScreen=document.getElementById("envelope-screen");

const flap=document.querySelector(".flap");

const seal=document.getElementById("open-btn");

const letter=document.querySelector(".letter");


const music=document.getElementById("music");

const openSound=document.getElementById("openSound");

const fireSound=document.getElementById("fireSound");


const soundBtn=document.getElementById("soundBtn");


let opened=false;

let musicPlaying=false;





/* ================= Open Envelope ================= */


/* ================= Open Envelope ================= */


seal.addEventListener("click",()=>{


if(opened)return;


opened=true;



// صوت فتح الظرف

openSound.volume=.8;

openSound.play();



// تشغيل الموسيقى

music.volume=.35;

music.play();

musicPlaying=true;


soundBtn.innerHTML="🔊";



// فتح الظرف الاحترافي

envelopeScreen.classList.add("open");



// الألعاب النارية

setTimeout(()=>{


fireSound.play();

fireworks();


},1200);




// Zoom سينمائي
setTimeout(()=>{


envelopeScreen.classList.add("zoom");


},2000);



// دخول الموقع

setTimeout(()=>{


envelopeScreen.style.display="none";


window.scrollTo({

top:document.getElementById("home").offsetTop,

behavior:"smooth"

});


},4000);



});






/* ================= Sound Button ================= */



soundBtn.onclick=()=>{


if(musicPlaying){


music.pause();

musicPlaying=false;

soundBtn.innerHTML="🔇";


}

else{


music.play();

musicPlaying=true;

soundBtn.innerHTML="🔊";


}


};







/* ================= Fireworks ================= */



function fireworks(){



for(let i=0;i<100;i++){


let spark=document.createElement("div");


spark.style.position="fixed";

spark.style.width="7px";

spark.style.height="7px";

spark.style.background="gold";

spark.style.borderRadius="50%";

spark.style.left="50%";

spark.style.top="50%";

spark.style.zIndex="99999";


document.body.appendChild(spark);



let x=(Math.random()-0.5)*700;

let y=(Math.random()-0.5)*700;



spark.animate([

{

transform:"translate(0,0)",

opacity:1

},

{

transform:
`translate(${x}px,${y}px)`,

opacity:0

}


],{


duration:1500,

easing:"ease-out"


});



setTimeout(()=>{

spark.remove();

},1600);



}



}







/* ================= Typing Effect ================= */


const texts=[

"جبران",

"رهف"

];


let index=0;


document.querySelectorAll(".typing").forEach((element)=>{


let text=element.innerHTML;

element.innerHTML="";


let i=0;


let timer=setInterval(()=>{


element.innerHTML+=text[i];


i++;


if(i>=text.length)

clearInterval(timer);



},300);



});







/* ================= Gold Particles ================= */


for(let i=0;i<120;i++){


let p=document.createElement("div");


p.style.position="fixed";

p.style.width="6px";

p.style.height="6px";

p.style.background="gold";

p.style.borderRadius="50%";

p.style.left=Math.random()*100+"vw";

p.style.top=Math.random()*100+"vh";

p.style.opacity=Math.random();


p.style.boxShadow="0 0 15px gold";


p.style.animation=
`floatGold ${5+Math.random()*8}s infinite`;



document.body.appendChild(p);


}








/* ================= Falling Roses ================= */



function createRose(){


let rose=document.createElement("div");


rose.innerHTML="🌹";


rose.style.position="fixed";

rose.style.top="-50px";

rose.style.left=
Math.random()*100+"vw";

rose.style.fontSize=
(20+Math.random()*30)+"px";

rose.style.zIndex="999";


rose.animate([

{

transform:"translateY(0) rotate(0deg)",

opacity:1

},

{

transform:
`translateY(110vh) rotate(360deg)`,

opacity:0

}

],{


duration:
5000+Math.random()*5000


});



document.body.appendChild(rose);



setTimeout(()=>{

rose.remove();

},10000);



}


setInterval(createRose,700);







/* ================= Hearts ================= */



function createHeart(){


let heart=document.createElement("div");


heart.innerHTML="💖";


heart.style.position="fixed";

heart.style.bottom="-30px";

heart.style.left=
Math.random()*100+"vw";

heart.style.fontSize="25px";

heart.style.zIndex="999";



heart.animate([

{

transform:"translateY(0)",

opacity:1

},

{

transform:"translateY(-120vh)",

opacity:0

}

],{


duration:6000

});



document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},6000);



}


setInterval(createHeart,1500);








/* ================= Countdown ================= */



let weddingDate =
new Date("2026-08-09 19:00:00").getTime();



setInterval(()=>{


let now=
new Date().getTime();


let distance=
weddingDate-now;



let days=
Math.floor(distance/(1000*60*60*24));


let hours=
Math.floor(
(distance%(1000*60*60*24))
/(1000*60*60)
);



let minutes=
Math.floor(
(distance%(1000*60*60))
/(1000*60)
);



let seconds=
Math.floor(
(distance%(1000*60))
/1000
);



document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;



},1000);







/* ================= Scroll Animation ================= */


const observer=
new IntersectionObserver(entries=>{


entries.forEach(e=>{


if(e.isIntersecting){


e.target.style.opacity=1;

e.target.style.transform="translateY(0)";


}


});


});



document.querySelectorAll("section")
.forEach(section=>{


section.style.opacity=0;

section.style.transform=
"translateY(80px)";

section.style.transition="1.2s";


observer.observe(section);



});
/* ================= إيقاف الموسيقى عند مغادرة الصفحة ================= */

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        music.pause();

        musicPlaying = false;

        soundBtn.innerHTML = "🔇";

    } else {

        // إذا رجع المستخدم للموقع لا تشغل الموسيقى تلقائياً
        // احتراماً لسياسات المتصفحات.
    }

});
window.addEventListener("pagehide", () => {

    music.pause();

});

window.addEventListener("beforeunload", () => {

    music.pause();

});
