var SpeechRecognition=window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start()
}

recognition.onresult= function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML=Content;
    if (Content == "Take my selfie."){
        
        speak()
    }
}


function speak(){
    var synth = window.speechSynthesis
    speak_data = "Taking Your Selfie In 5 seconds! | SMILE"
    var utterThis = new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterThis);
    
     5000;

    var synth = window.speechSynthesis
    speak_data = "Taking Your Selfie In 10 seconds! | SMILE"
    var utterThis = new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterThis);
    
     10000;

     var synth = window.speechSynthesis
     speak_data = "Taking Your Selfie In 15 seconds! | SMILE"
     var utterThis = new SpeechSynthesisUtterance(speak_data)
     synth.speak(utterThis);
     
     } 15000;

Webcam.set({
    width: 360,
    height: 200,
    image_format: "png",
    png_quality: 100
})
camera=document.getElementById("camera")

function takeSnapShot (){

    console.log(img_id);

    Webcam.snap(function(data_uri){
        if(img_id==myselfie.png){
        document.getElementById("result1").innerHTML = "<img id='myselfie.png' src='"+data_uri+"' >";
        }
        if(img_id==myselfiecopy.png){
            document.getElementById("result1").innerHTML = "<img id='myselfie.png' src='"+data_uri+"' >";
            }
            if(img_id==myselfiecopy2.png){
                document.getElementById("result1").innerHTML = "<img id='myselfie.png' src='"+data_uri+"' >";
                }
    })

}

function save(){
    link=document.getElementById("link")
    image=document.getElementById("myselfie.png").src
    image=document.getElementById("myselfiecopy.png").src
    image=document.getElementById("myselfiecopy.2png").src
    link.href=image
    link.click()
}