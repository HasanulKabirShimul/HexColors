function changeColor(){
    var hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    var hex_Code = '';
    for(var i=0;i<6;i++){
        var random_number = Math.floor(Math.random()*hex_numbers.length);
        hex_Code += hex_numbers[random_number];
    }
    document.getElementById("hex-code").innerHTML = hex_Code;
    document.body.style.backgroundColor = "#"+hex_Code;
}