prediction1="";
prediction2="";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach("camera");

function takepic(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img src='"+data_uri+"' id='takensnap'>";
    });
}

console.log("ml5", ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/S99WYLFou/model.json", modelLoaded);

function modelLoaded(){
    console.log("yay model loaded!!!! :D");
}

function predict(){
    img=document.getElementById("takensnap");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
if(error){
    console.error(error);
}
if(results){
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML=results[0].label;
    document.getElementById("result_emotion_name2").innerHTML=results[1].label;
    prediction1=results[0].label;
    prediction2=results[1].label;

    Speak();

    if(results[0].label=="A"){
        document.getElementById("emojitag").innerHTML="&#9994;";
    }
    else if(results[0].label=="B"){
        document.getElementById("emojitag").innerHTML="&#9996;";
    }
    else if(results[0].label=="C"){
        document.getElementById("emojitag").innerHTML="&#129295;";
    }
    else if(results[0].label=="D"){
        document.getElementById("emojitag").innerHTML="&#9757;";
    }
    else if(results[0].label=="E"){
        document.getElementById("emojitag").innerHTML="&#9994;";
    }
    if(results[0].label=="F"){
        document.getElementById("emojitag").innerHTML="&#128076;";
    }
    else if(results[0].label=="G"){
        document.getElementById("emojitag").innerHTML="&#129295;";
    }
    else if(results[0].label=="H"){
        document.getElementById("emojitag").innerHTML="&#128072;";
    }
    else if(results[0].label=="I"){
        document.getElementById("emojitag").innerHTML="&#9757;";
    }
    else if(results[0].label=="J"){
        document.getElementById("emojitag").innerHTML="&#128072;";
    }
    if(results[0].label=="K"){
        document.getElementById("emojitag").innerHTML="&#128406;";
    }
    else if(results[0].label=="L"){
        document.getElementById("emojitag").innerHTML="&#128170;";
    }
    else if(results[0].label=="M"){
        document.getElementById("emojitag").innerHTML="&#9994;";
    }
    else if(results[0].label=="N"){
        document.getElementById("emojitag").innerHTML="&#9994;";
    }
    else if(results[0].label=="O"){
        document.getElementById("emojitag").innerHTML="&#129295;";
    }
    if(results[0].label=="P"){
        document.getElementById("emojitag").innerHTML="&#128072;";
    }
    else if(results[0].label=="Q"){
        document.getElementById("emojitag").innerHTML="&#128071;";
    }
    else if(results[0].label=="R"){
        document.getElementById("emojitag").innerHTML="&#129310;";
    }
    else if(results[0].label=="S"){
        document.getElementById("emojitag").innerHTML="&#9994;";
    }
    else if(results[0].label=="T"){
        document.getElementById("emojitag").innerHTML="&#9994;";
    }
    if(results[0].label=="U"){
        document.getElementById("emojitag").innerHTML="&#9996;";
    }
    else if(results[0].label=="V"){
        document.getElementById("emojitag").innerHTML="&#9996;";
    }
    else if(results[0].label=="W"){
        document.getElementById("emojitag").innerHTML="&#9996;";
    }
    else if(results[0].label=="X"){
        document.getElementById("emojitag").innerHTML="&#128070;";
    }
    else if(results[0].label=="Y"){
        document.getElementById("emojitag").innerHTML="&#129311;";
    }
    if(results[0].label=="Z"){
        document.getElementById("emojitag").innerHTML="&#9757;";
    }


    if(results[1].label=="A"){
        document.getElementById("emojitag2").innerHTML="&#9994;";
    }
    else if(results[1].label=="B"){
        document.getElementById("emojitag2").innerHTML="&#9996;";
    }
    else if(results[1].label=="C"){
        document.getElementById("emojitag2").innerHTML="&#129295;";
    }
    else if(results[1].label=="D"){
        document.getElementById("emojitag2").innerHTML="&#9757;";
    }
    else if(results[1].label=="E"){
        document.getElementById("emojitag2").innerHTML="&#9994;";
    }
    if(results[1].label=="F"){
        document.getElementById("emojitag2").innerHTML="&#128076;";
    }
    else if(results[1].label=="G"){
        document.getElementById("emojitag2").innerHTML="&#129295;";
    }
    else if(results[1].label=="H"){
        document.getElementById("emojitag2").innerHTML="&#128072;";
    }
    else if(results[1].label=="I"){
        document.getElementById("emojitag2").innerHTML="&#9757;";
    }
    else if(results[1].label=="J"){
        document.getElementById("emojitag2").innerHTML="&#128072;";
    }
    if(results[1].label=="K"){
        document.getElementById("emojitag2").innerHTML="&#128406;";
    }
    else if(results[1].label=="L"){
        document.getElementById("emojitag2").innerHTML="&#128170;";
    }
    else if(results[1].label=="M"){
        document.getElementById("emojitag2").innerHTML="&#9994;";
    }
    else if(results[1].label=="N"){
        document.getElementById("emojitag2").innerHTML="&#9994;";
    }
    else if(results[1].label=="O"){
        document.getElementById("emojitag2").innerHTML="&#129295;";
    }
    if(results[1].label=="P"){
        document.getElementById("emojitag2").innerHTML="&#128072;";
    }
    else if(results[1].label=="Q"){
        document.getElementById("emojitag2").innerHTML="&#128071;";
    }
    else if(results[1].label=="R"){
        document.getElementById("emojitag2").innerHTML="&#129310;";
    }
    else if(results[1].label=="S"){
        document.getElementById("emojitag2").innerHTML="&#9994;";
    }
    else if(results[1].label=="T"){
        document.getElementById("emojitag2").innerHTML="&#9994;";
    }
    if(results[1].label=="U"){
        document.getElementById("emojitag2").innerHTML="&#9996;";
    }
    else if(results[1].label=="V"){
        document.getElementById("emojitag2").innerHTML="&#9996;";
    }
    else if(results[1].label=="W"){
        document.getElementById("emojitag2").innerHTML="&#9996;";
    }
    else if(results[1].label=="X"){
        document.getElementById("emojitag2").innerHTML="&#128070;";
    }
    else if(results[1].label=="Y"){
        document.getElementById("emojitag2").innerHTML="&#129311;";
    }
    if(results[1].label=="Z"){
        document.getElementById("emojitag2").innerHTML="&#9757;";
    }

        
        
}
}

function Speak(){
    var synth=window.speechSynthesis;
    phrase1="The first prediction is "+prediction1;
    phrase2="and the second prediction is "+prediction2;
    var utterThis=new SpeechSynthesisUtterance(phrase1+phrase2);
    synth.speak(utterThis);
}
