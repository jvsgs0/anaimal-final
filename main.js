function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/6f5VhYLuO/model.json', modelReady);
}
function modelReady(){
    classifier.classify( gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Posso ouvir - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('cachorro');
        img1 = document.getElementById('gato');
        img2 = document.getElementById('porco');
        img3 = document.getElementById('pássaro');

        if (results[0].label == "cachorro") {
            img.src = 'cachorro.gif';
            img1.src = 'gato.avif';
            img2.src = 'porco.webp';
            img3.src = 'passaro.jpg';
        } else if (results[0].label == "gato") {
            img.src = 'cachorro.png';
            img1.src = 'gato.gif';
            img2.src = 'porco.webp';
            img3.src = 'passaro.jpg';
        } else if (results[0].label == "porco") {
            img.src = 'cachorro.png';
            img1.src = 'gato.avif';
            img2.src = 'porco_gif.webp';
            img3.src = 'passaro.jpg';
        } else if (results[0].label == "pássaro") {
            img.src = 'cachorro.png';
            img1.src = 'gato.avif';
            img2.src = 'porco.webp';
            img3.src = 'passaro.gif';
        } else {
            img.src = 'cachorro.gif';
            img1.src = 'gato.avif';
            img2.src = 'porco.webp';
            img3.src = 'passaro.jpg';
    }
  }
}









//https://teachablemachine.withgoogle.com/models/6f5VhYLuO/