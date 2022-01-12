var li_item_index = 0;
var latest_item_id = [];

function addItem(){
    let item = document.getElementById('item').value;

    //Evaluates to true iff item is NOT: null, undefined, NaN, "", 0, false
    if(item){
        let list = document.getElementById('itemList');
        let newitem = document.createElement('li');
        let newitemid = 'li_number_' + li_item_index++;
    
        newitem.appendChild(document.createTextNode(item));
        newitem.setAttribute('id', newitemid);
        newitem.addEventListener('click', function(){
            finish(newitemid);
        });
    
        list.appendChild(newitem);
    }

    let meme = 'ba' + parseInt('a') + 'a';
    console.log(meme.toLowerCase());
}

function undo(){
    if(latest_item_id.length > 0){
        document.getElementById(latest_item_id.pop()).classList.remove('finito');
    }
    else{
        console.log('empty');
    }
}

function finish(itemid){
    document.getElementById(itemid).classList.add('finito');

    latest_item_id.push(itemid);
}

document.getElementById('addItem').onclick = addItem;
document.getElementById('undo').onclick = undo;