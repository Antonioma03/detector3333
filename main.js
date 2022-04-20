function setup(){
    canvas=createCanvas(300,300);
    background("white");
    canvas.mouseReleased(classifyCanvas);
    voz=window.speechSynthesis;
}
function preload(){
    imagenes=ml5.imageClassifier('DoodleNet');
}
function borar(){
    background("white");
}
function draw(){
    strokeWeight(10);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
function classifyCanvas(){
imagenes.classify(canvas,gotResult);
}
function gotResult(error,results){
if(error){
    console.error(error);
}
console.log(results);
document.getElementById('objetoreconosido').innerHTML=results[0].label;
document.getElementById('confiansa').innerHTML=results[0].confidence;
ablar=new SpeechSynthesisUtterance(results[0].label);
voz.speak(ablar);
}