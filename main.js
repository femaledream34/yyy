status="true";

img="";
object=[];
function preload()
{
img=loadImage('dog_cat.jpg');
}

function setup()
{
    canvas=createCanvas(380,380);
    canvas.center();
        video.hide();
        objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:detecting objects";
}

function draw()
{
    image(img,0,0,380,380);
    if(status!="") 
    {
        r=random(255);
        g=random(255);
        b=random(255);
        objectDetector.detect(img,gotResult)
        for(i=0;i<object.length;i++){
            document.getElementById("status").innerHTML="status:objects detected";
            document.getElementById("number_of_objects").innerHTML="number of objects detected are:"+object.length ;
            fill(r,g,b);
            percent=floor(object[i].confidence*100);
            stroke(r,g,b);
            noFill();
            text(object[i].label+" "+percent+"%",object[i].x+15,object[i].y+15);
            rect(object[i].x,object[i].y,object[i].width,object[i].height)
        }
    }
  
 }
function modelLoaded()
{
    console.log("modelLoaded");
    status=true;
   
}
function gotResult(error,results)
{
if(error){
    console.log(error)
}
console.log(results);
object=results;

}
