var canvas2=document.getElementById("canvas10");
var twod_drawing=canvas2.getContext("2d");
var rover_width=100;
var rover_height=100;
var locationx=200;
var locationy=200;
var rover_img="rover.png";
var background_drawing;
var rover_drawing;
var images= ["mars1.jpg","mas2.jpg","mars3.jpg","mars4.jpg","mars.jpg"]
var background_img=images[Math.floor(Math.random()*4)];
function add(){
    background_drawing=new Image();
    background_drawing.onload=upload;
    background_drawing.src=background_img;
    rover_drawing=new Image();
    rover_drawing.onload=uploadrover;
    rover_drawing.src=rover_img;
}
function upload(){
    twod_drawing.drawImage(background_drawing,0,0, canvas2.width, canvas2.height)
}
function uploadrover(){
    twod_drawing.drawImage(rover_drawing,locationx,locationy,rover_width,rover_height)
}
window.addEventListener("keydown",move);
function move(e){
    var code=e.keyCode;
    console.log(code);
    if(code=="40"){
        console.log("down is pressed");
        down();
    }
    if(code=="37"){
        console.log("left is pressed")
        left()
    }
    if(code=="39"){
        console.log("right is pressed")
        right();
    }
    if(code=="38"){
        console.log("up is pressed")
        up();
    }
}
function right(){
    if(locationx<400){
    locationx=locationx+10;
    upload()
    uploadrover();
    }
}
function left(){
    if(locationx>0){
    locationx=locationx-10;
    upload();
    uploadrover();
    }
}
function up(){
    if(locationy>0){
    locationy=locationy-10
    upload();
    uploadrover();
    }
}
function down(){
    if(locationy<400){
    locationy=locationy+10
    upload();
    uploadrover();
    }
}

