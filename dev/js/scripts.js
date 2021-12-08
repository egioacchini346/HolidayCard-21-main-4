import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(GSDevTools,SplitText,DrawSVGPlugin,MorphSVGPlugin);
MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

gsap.set("#window-scene",{transformOrigin:"60% 40%"});
gsap.set("#cabin-scene",{transformOrigin:"80% 50%"});
gsap.set("#bg",{scaleY:2});
gsap.set(".snow",{alpha: 0});


var audio = new Audio('audio/cardMusic.mp3');


const mainTl = new gsap.timeline();
mainTl.pause();

function scaleWindow(){
    const tl = new gsap.timeline();
    tl.to("#window-scene",{duration:5, ease:"none", scale:20})
    .to("#window-scene",{duration:0.25, alpha:0},"-=3");
    return tl;
}

function scaleOutside(){
    const tl = new gsap.timeline();
    tl.from("#front-left",{duration: 5, y:"+=200"},"zoom")
    .from("#front-right",{duration: 5, y:"+=200"},"zoom")
    .from("#middle-in-front-of",{duration: 5,  y:"+=250"},"zoom")
    .from("#house-hill",{duration: 5,  y:"+=250"},"zoom")
    .from("#center",{duration: 5,  y:"+=300"},"zoom")
    .from("#background-mountains",{duration: 5,  y:"+=300"},"zoom")
    .from("#chimney-main",{duration: 5, alpha:0, y:"+=150"},"-=4");
    return tl;
}

function majorAniIn(){
    var splitMajors = new SplitText("#majors li",{type: "words,chars"}),
    chars = splitMajors.chars; 
    const tl = new gsap.timeline();
    tl.from("#majors",{duration:0.5, scale:0, alpha:0, xPercent:-50, yPercent:-50})
    .from(chars,{duration:0.5, y:"+=50", stagger:0.01, alpha:0});
    return tl;
}

function majorAniOut(){
    var splitMajors = new SplitText("#majors li",{type: "lines"}),
    lines = splitMajors.lines; 
    const tl = new gsap.timeline();
    tl.to(lines,{duration:0.5, y:"+=50", stagger:-0.01, alpha:0})
    .to("#majors",{duration:0.5, alpha:0},"-=50%");
    return tl;
}

function zoomIn(){
    const tl = new gsap.timeline();
    tl.to("#front-left",{duration: 4, ease:"none", y:"+=800", scale:2.5,transformOrigin:"center"},"zoom")
    .to("#front-right",{duration: 4, ease:"none", y:"+=800", scale:2.5,transformOrigin:"center"},"zoom")
    .to("#middle-in-front-of",{duration: 4, ease:"none", y:"+=850", scale:2.5,transformOrigin:"center"},"zoom")
    .to("#house-hill",{duration: 8, ease:"none", y:"+=200", scale:10,transformOrigin:"center", x:"-=500"},"zoom")
    .to("#chimney-main",{duration: 1, alpha:0},"zoom")
    .to("#center",{duration: 8, ease:"none", y:"+=400", scale:2,transformOrigin:"center"},"zoom")
    .to("#background-mountains",{duration: 8, ease:"none", y:"+=200", scale:1.5,transformOrigin:"center"},"zoom")
    .to(".snow",{duration:1, alpha:0},"-=2")
    .to("#house-hill",{duration: 1, ease:"none", scale:100,transformOrigin:"center", y:"+=1200", x:"-=2000" },"fade")
    .to("#cabin-scene",{duration: 1, alpha:0},"fade")
    return tl;
}

function popcorn(){
    gsap.set("#leaf-clip-right",{transformOrigin:"left center"});
    gsap.set("#leaf-clip-left",{transformOrigin:"right center"});
    const tl = new gsap.timeline();
    tl.from(".pop",{duration: 0.25, alpha:0, stagger:-0.15})
    .from("#leaf-clip-right",{duration: 0.5, scale:0},"grow")
    .from("#leaf-clip-left",{duration: 0.5, scale:0},"grow")
    return tl;
}

function lights(){
    const tl = new gsap.timeline();
    tl.from(".wire",{duration: 0.5, stagger:0.25, drawSVG:"0"},"lights")
    .from(".lights",{duration: 0.25, stagger:0.12, scale:0, transformOrigin:"center"},"lights")
    .to(".bulb",{duration: 0.05, stagger:0.015, fill:"#FFFB99"},"glow")
    .from("#glow",{duration: 1, alpha:0},"glow")
    return tl;
}

function bigcandle (){
    const tl = new gsap.timeline();
    tl.from("#light_2", {duration: .15, opacity: 1}, "flicker1")
    tl.from("#light_2", {duration: .15, opacity:.55}, "flicker2")
    tl.from("#light_2", {duration: .15, opacity:.10}, "flicker3")
    tl.from("#light_2", {duration: .15, opacity:.40}, "flicker4")
    tl.from("#light_2", {duration: .15, opacity:.75}, "flicker5")
    tl.from("#light_2", {duration: .15, opacity:.90}, "flicker6")
    tl.from("#light_2", {duration: .15, opacity:.65}, "flicker7")
    tl.from("#light_2", {duration: .15, opacity:.25}, "flicker8")
    tl.from("#light_2", {duration: .15, opacity:.45}, "flicker9")
    tl.from("#light_2", {duration: .15, opacity:.15}, "flicker10")
    tl.from("#light_2", {duration: .15, opacity: 1}, "flicker11")
    tl.from("#light_2", {duration: .15, opacity: 1}, "flicker12")
    tl.from("#light_2", {duration: .15, opacity:.55}, "flicker13")
    tl.from("#light_2", {duration: .15, opacity:.10}, "flicker14")
    tl.from("#light_2", {duration: .15, opacity:.40}, "flicker15")
    tl.from("#light_2", {duration: .15, opacity:.75}, "flicker16")
    tl.from("#light_2", {duration: .15, opacity:.90}, "flicker17")
    tl.from("#light_2", {duration: .15, opacity:.65}, "flicker18")
    tl.from("#light_2", {duration: .15, opacity:.25}, "flicker19")
    tl.from("#light_2", {duration: .15, opacity:.45}, "flicker20")
    tl.from("#light_2", {duration: .15, opacity:.15}, "flicker21")
    tl.from("#light_2", {duration: .15, opacity: 1}, "flicker22")
    tl.from("#light_2", {duration: .15, opacity: 1}, "flicker23")
    tl.from("#light_2", {duration: .15, opacity:.55}, "flicker24")
    tl.from("#light_2", {duration: .15, opacity:.10}, "flicker25")
    tl.from("#light_2", {duration: .15, opacity:.40}, "flicker26")
    tl.from("#light_2", {duration: .15, opacity:.75}, "flicker27")
    tl.from("#light_2", {duration: .15, opacity:.90}, "flicker28")
    tl.from("#light_2", {duration: .15, opacity:.65}, "flicker29")
    tl.from("#light_2", {duration: .15, opacity:.25}, "flicker30")
    tl.from("#light_2", {duration: .15, opacity: 1}, "flicker31")
    tl.from("#light_2", {duration: .15, opacity:.55}, "flicker32")
    tl.from("#light_2", {duration: .15, opacity:.10}, "flicker33")
    tl.from("#light_2", {duration: .15, opacity:.40}, "flicker34")
    tl.from("#light_2", {duration: .15, opacity:.75}, "flicker35")
    tl.from("#light_2", {duration: .15, opacity:.90}, "flicker36")
    tl.from("#light_2", {duration: .15, opacity:.65}, "flicker37")
    tl.from("#light_2", {duration: .15, opacity:.25}, "flicker38")
    tl.from("#light_2", {duration: .15, opacity:.45}, "flicker39")
    tl.from("#light_2", {duration: .15, opacity:.15}, "flicker40")
  
    return tl;

}

function littlecandle (){
    const tl = new gsap.timeline();
    tl.from("#light", {duration: .15, opacity: 1}, "flicker1")
    tl.from("#light", {duration: .15, opacity:.65}, "flicker2")
    tl.from("#light", {duration: .15, opacity:.85}, "flicker3")
    tl.from("#light", {duration: .15, opacity:.2}, "flicker4")
    tl.from("#light", {duration: .15, opacity:.15}, "flicker5")
    tl.from("#light", {duration: .15, opacity:.90}, "flicker6")
    tl.from("#light", {duration: .15, opacity:.35}, "flicker7")
    tl.from("#light", {duration: .15, opacity:.55}, "flicker8")
    tl.from("#light", {duration: .15, opacity:.45}, "flicker9")
    tl.from("#light", {duration: .15, opacity:.65}, "flicker10")
    tl.from("#light", {duration: .15, opacity: 1}, "flicker11")
    tl.from("#light", {duration: .15, opacity: 1}, "flicker12")
    tl.from("#light", {duration: .15, opacity:.55}, "flicker13")
    tl.from("#light", {duration: .15, opacity:.10}, "flicker14")
    tl.from("#light", {duration: .15, opacity:.40}, "flicker15")
    tl.from("#light", {duration: .15, opacity:.75}, "flicker16")
    tl.from("#light", {duration: .15, opacity:.90}, "flicker17")
    tl.from("#light", {duration: .15, opacity:.65}, "flicker18")
    tl.from("#light", {duration: .15, opacity:.25}, "flicker19")
    tl.from("#light", {duration: .15, opacity:.45}, "flicker20")
    tl.from("#light", {duration: .15, opacity:.15}, "flicker21")
    tl.from("#light", {duration: .15, opacity: 1}, "flicker22")
    tl.from("#light", {duration: .15, opacity: 1}, "flicker23")
    tl.from("#light", {duration: .15, opacity:.55}, "flicker24")
    tl.from("#light", {duration: .15, opacity:.10}, "flicker25")
    tl.from("#light", {duration: .15, opacity:.40}, "flicker26")
    tl.from("#light", {duration: .15, opacity:.75}, "flicker27")
    tl.from("#light", {duration: .15, opacity:.90}, "flicker28")
    tl.from("#light", {duration: .15, opacity:.65}, "flicker29")
    tl.from("#light", {duration: .15, opacity:.25}, "flicker30")
    tl.from("#light", {duration: .15, opacity: 1}, "flicker31")
    tl.from("#light", {duration: .15, opacity:.55}, "flicker32")
    tl.from("#light", {duration: .15, opacity:.10}, "flicker33")
    tl.from("#light", {duration: .15, opacity:.40}, "flicker34")
    tl.from("#light", {duration: .15, opacity:.75}, "flicker35")
    tl.from("#light", {duration: .15, opacity:.90}, "flicker36")
    tl.from("#light", {duration: .15, opacity:.65}, "flicker37")
    tl.from("#light", {duration: .15, opacity:.25}, "flicker38")
    tl.from("#light", {duration: .15, opacity:.45}, "flicker39")
    tl.from("#light", {duration: .15, opacity:.15}, "flicker40")
  
    return tl;

}
fire1();

function fire1(){
    const tl = new gsap.timeline({repeat:-1});
    tl.to("#flame-1",{duration: 0.5, morphSVG:"#flame-2", fill:"#EA7C4D", ease:"none"})
    .to("#flame-1",{duration: 0.5, morphSVG:"#flame-3", fill:"#EA7C4D", alpha:0.45, ease:"none"})
    .to("#flame-1",{duration: 0.5, morphSVG:"#flame-4", fill:"#EA7C4D", alpha:0.20, ease:"none"})
    .to("#flame-1",{duration: 0.25, alpha:0, ease:"none"})
}
setTimeout(fire2, 500);
function fire2(){
    const tl = new gsap.timeline({repeat:-1});
    tl.to("#flame-1-2",{duration: 0.5, morphSVG:"#flame-2-2", fill:"#EA7C4D", ease:"none"})
    .to("#flame-1-2",{duration: 0.5, morphSVG:"#flame-3-2", fill:"#EA7C4D", alpha:0.45, ease:"none"})
    .to("#flame-1-2",{duration: 0.5, morphSVG:"#flame-4-2", fill:"#EA7C4D", alpha:0.20, ease:"none"})
    .to("#flame-1-2",{duration: 0.25, alpha:0, ease:"none"})
}

setTimeout(fire3, 1000);
function fire3(){
    const tl = new gsap.timeline({repeat:-1});
    tl.to("#flame-1-3",{duration: 0.5, morphSVG:"#flame-2-3", fill:"#EA7C4D", ease:"none"})
    .to("#flame-1-3",{duration: 0.5, morphSVG:"#flame-3-3", fill:"#EA7C4D", alpha:0.45, ease:"none"})
    .to("#flame-1-3",{duration: 0.5, morphSVG:"#flame-4-3", fill:"#EA7C4D", alpha:0.20, ease:"none"})
    .to("#flame-1-3",{duration: 0.25, alpha:0, ease:"none"})
}

setTimeout(fire4, 1500);
function fire4(){
    const tl = new gsap.timeline({repeat:-1});
    tl.to("#flame-1-4",{duration: 0.5, morphSVG:"#flame-2-4", fill:"#EA7C4D", ease:"none"})
    .to("#flame-1-4",{duration: 0.5, morphSVG:"#flame-3-4", fill:"#EA7C4D", alpha:0.45, ease:"none"})
    .to("#flame-1-4",{duration: 0.5, morphSVG:"#flame-4-4", fill:"#EA7C4D", alpha:0.20, ease:"none"})
    .to("#flame-1-4",{duration: 0.25, alpha:0, ease:"none"})
}
smallFlame();
function smallFlame(){
    const tl = new gsap.timeline({repeat:-1});
    tl.fromTo(".small",{y:"+=10", scale:0.25, transformOrigin:"center bottom", alpha:0.25},{duration:1, y:"-=100", stagger:0.25, alpha:0, scale:0.5});
}

function message(){
    const tl = new gsap.timeline();
    tl.from("#message",{duration:1,alpha:0})
    .from(".content",{duration:1,alpha:0, stagger:0.5, y:"+=100"});
    
    return tl;
}


mainTl.add(scaleWindow(),"zoom")
.add(scaleOutside(),"zoom")
.add(majorAniIn(),"-=50%")
.add(majorAniOut(),"+=50%")
.add(zoomIn(),"fire")
.add(popcorn(),"room")
.add(bigcandle(),"room")
.add(littlecandle(),"room")
.add(lights(),"room")
.add(message());

function startAnimation(){
    mainTl.play();
    mainTl.delay(1);
    audio.play();
    gsap.to(".snow",{duration:2, alpha: 1, delay:1.5});
}


// GSDevTools.create();
document.getElementById("button").onclick = startAnimation;
