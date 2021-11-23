img="";
Status="";
object=[];

function setup ()
{
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(380,380);

    objectDetector= ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="Status: Detecting objects";

    

}

function modelloaded ()
{
    console.log("model Loaded !");
    Status=true;
    
}

function gotresults (error,results)
{
    if(error)
    {
        console.error(error)
    }
    else {
console.log(results);
object=results;
}

}

function preload ()
{
    img=loadImage("dog_cat.jpg");
}

function draw ()
{
    image(video,0,0,380,380);
    if(Status !="")
    {
        r=random(255);
        g=random(255);
        b=random(255);
        objectDetector.detect(video,gotresults);
    for(i=0;i<object.length;i++){
        document.getElementById("status").innerHTML="Status: Object detected";
        

        percent=floor(object[i].confidence*100);
        document.getElementById("number_of_object").innerHTML="Number of objects detected are:"+object.length;
        fill(r,g,b);
        text(object[i].label+" " +percent +"%",object[i].x,object[i].y);
        noFill();
        stroke(r,g,b);
        rect(object[i].x,object[i].y,object[i].width,object[i].height);

        

    }

    }




  
    
}