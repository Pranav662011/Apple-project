x=0;
y=0;

to_number="";


apple="";


function preload(){
    apple=loadImage("apple.png");
}

var speechRecognition=window.webkitSpeechRecognition;

var recognition=new speechRecognition();

function start(){
    document.getElementById("status").innerHTML="System is listening please speak";
    recognition.start();
    

}


function setup(){
    screen_width=window.innerWidth;
}

recognition.onresult=function(event){

    to_number=Number(content);
    if(Number.isInteger(to_number))
    {
        document.getElementById("status").innerHTML=to_number+"Apple is drawn";
    }
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="The speech as been recognised as = "+content;
    if(content==to_number+"Apple"){
        x=Math.floor(Math.random()*800);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started drawing apple";
        apple="set";

    }
}

function setup()
{
    canvas=createCanvas(800,600);
}

 function draw(){
 if(apple=="set"){
    
  image(apple,x,y,80,80);
    document.getElementById("status").innerHTML="Apple is drawn";
    speak_data="Apple is drawn";
    speak();
    apple="";
 }
}

function speak(){
    var synth=window.speechSynthesis;
    var utterthis=new speechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    speak_data="";



}


