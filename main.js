function startclassification(){
    navigator.mediaDevice.getUserMedia({ audio:true});
    classifier = m15.soundClassifier('')
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
 if(error){
    console.error(error)
 }
 else{
    console.log(results);
    random_number_r = Math.floor(Math.random() *255) +1;
    random_number_g = Math.floor(Math.random() *255) +1;
    random_number_b = Math.floor(Math.random() *255) +1;
    document.getElementById("result_label").innerHTML = 'posso ouvir'+ results[0].label; 
    document.getElementById("result_confidence").innerHTML = 'precisão'+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img= document.getElementById('alien1'); 
    img1= document.getElementById('alien2'); 
    img2= document.getElementById('alien3'); 
    img3= document.getElementById('alien4'); 
 }
}