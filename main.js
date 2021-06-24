function preload(){
clown = loadImage("https://i.postimg.cc/Pf0jwx50/clownnose.png");
}

function setup(){
canvas = createCanvas(600, 600);
canvas.center();
v1 = createCapture(VIDEO);
v1.hide();

pNet = ml5.poseNet(v1, modelLoaded);
pNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log("PoseNet has loaded");
}

nose_x = 0;
nose_y = 0;
clown = "";

function gotPoses(results){

    if (results.length > 0){

nose_x = results[0].pose.nose.x - 35;
nose_y = results[0].pose.nose.y + 60;
console.log("Nose X = "+ nose_x + " Nose Y = "+nose_y);
    }
}

function draw(){
image (v1, 0, 0, 600, 600);

image (clown, nose_x, nose_y, 50,50);
}

