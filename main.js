function StartSound(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/lluMKd8gg/model.json", modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error)
    }else{
        console.log(results)
        document.getElementById("SoundOutput").innerHTML = results[0].label;
        percent = results[0].confidence * 100;
        document.getElementById("AccuracyOutput").innerHTML = percent.toFixed(2) + " % "
    }
}