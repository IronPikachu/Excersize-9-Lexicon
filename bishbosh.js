function bishbosh(){
    bish = document.getElementById("bish");
    bosh = document.getElementById("bosh");
    max = document.getElementById("max");

    if(invalid(bish) || invalid(bosh) || invalid(max)){
        document.getElementById("numbers").innerHTML = "<p>bad format</p>";
        return;
    }

    newHtml = "<p>";

    for(i = 1; i <= max; i++){
        if(i % bish == 0 && i % bosh == 0){
            newHtml += "BishBosh ";
        }
        else if (i % bish == 0){
            newHtml += "Bish ";
        }
        else if (i % bosh == 0){
            newHtml += "Bish ";
        }
        else{
            newHtml += i + " ";
        }
    }

    newHtml += "</p>";

    document.getElementById("numbers").innerHTML = newHtml;
}

function invalid(number){
    if(number < 2){
        return true;
    }
    return false;
}