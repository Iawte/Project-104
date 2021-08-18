Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});
Webcam.attach("#camera");

function takeSnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='imageSnap' src='" + data_uri + "'></img>"
    })
}

console.log("version-"+ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/W6i6O4vPW/model.json",modelLoaded)