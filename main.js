var Nose = 0;
var Leftwrist = 0;
var Rightwrist = 0;
function setup(){
    canvas = createCanvas(screen.width/2, 485);
    video = createCapture(VIDEO);
    video.size(550, 300);
    loadPosenet = ml5.poseNet(video, modelLoaded);
    loadPosenet.on('pose', gotPoses);
    canvas.position(screen.width/2, 95);
}
function modelLoaded(){
    console.log("Model isn't loaded.");
}
function draw(){
    background("green");
    fill("blue");
    stroke("blue");
    text("Baburao", Nose.x, Nose.y);
    textSize((Math.abs(Rightwrist - Leftwrist)));
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        Nose = {x: results[0].pose.nose.x, y: results[0].pose.nose.y};
        Rightwrist = results[0].pose.rightWrist.x;
        Leftwrist = results[0].pose.leftWrist.x;
    }
}