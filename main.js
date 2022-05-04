mustacheX=0;
mustacheY=0;
function preload(){
mustache=loadImage('https://th.bing.com/th/id/R.65fb7a203927487699d1b2daba69b0f1?rik=AW0vd1kpBpAOMQ&riu=http%3a%2f%2fclipart-library.com%2fdata_images%2f83931.jpg&ehk=h1N6XRJZk1MTMgP6%2bV%2fYTncokhJ692SLhBc%2fwJevI2o%3d&risl=&pid=ImgRaw&r=0')
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();

   posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes);
}
function modelLoaded(){
    console.log("missionposenutisasuccess");
}
function gotposes(results){
if(results.length>0){
    console.log(results);
    mustacheX=results[0].pose.nose.x-15;
    mustacheY=results[0].pose.nose.y-15;

}
}
function draw(){
    image(video,0,0,400,400);
    image(mustache
,mustacheX,mustacheY,30,30);
}
function takesnap(){
    save('er-se-eb-pp.png')
}