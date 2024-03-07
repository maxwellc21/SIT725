
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("btn").addEventListener("click", changeText)
    
    function changeText(){
    var textArray = ["Applied", "Software", "Engineering", "SIT725",""]
    var number = getRandomNumberBetween(0, textArray.length-1)
    console.log("index", number)
    document.getElementById("heading").innerHTML=textArray[number];

}
function getRandomNumberBetween(min, max){
    return Math.floor(Math.random()*(max-min)+min);

}

});