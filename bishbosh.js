function bishbosh(){
    bish = parseInt(document.getElementById('bish').value);
    bosh = parseInt(document.getElementById('bosh').value);
    max = parseInt(document.getElementById('max').value);

    numberdisplay = document.getElementById('numbers').innerHTML;

    if(invalid(bish) || invalid(bosh) || invalid(max)){
        numberdisplay = '<p>bad format</p>';
        document.getElementById('numbers').innerHTML = numberdisplay;
        return;
    }

    numberdisplay = '<p>';

    for(i = 1; i <= max; i++){
        if(i % bish == 0 && i % bosh == 0){
            numberdisplay += 'BishBosh ';
            console.log('bishbosh');
        }
        else if (i % bish == 0){
            numberdisplay += 'Bish ';
        }
        else if (i % bosh == 0){
            numberdisplay += 'Bish ';
        }
        else{
            numberdisplay += i + ' ';
        }
    }

    numberdisplay += '</p>';

    document.getElementById('numbers').innerHTML = numberdisplay;
}

function invalid(number){
    if(number < 2){
        return true;
    }
    return false;
}