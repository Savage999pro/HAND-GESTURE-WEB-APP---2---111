//https://teachablemachine.withgoogle.com/models/VvfF7asI9/
Webcam.set({
    width:450,
    height:400,
    image_format : 'png',
    png_quality:90,
    crop_width:400,
    crop_height:350
});
Webcam.attach("#camera");
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
    });

}
console.log('ml5 version,'+ ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/VvfF7asI9/model.json",modelLoaded);
function modelLoaded() {
    console.log("Model Loaded!");
}