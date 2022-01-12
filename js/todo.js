var li_item_index = 0;
var latest_item_id = [];

function addItem(){
    let item = document.getElementById('item').value;

    //Evaluates to true iff item is NOT: null, undefined, NaN, "", 0, false
    if(item){
        let list = document.getElementById('itemList');
        let newitem = document.createElement('li');
        let newitemid = 'li_number_' + li_item_index++;

        let rmvbtn = document.createElement('button');
        rmvbtn.innerHTML = 'Remove';
        rmvbtn.classList.add('btn-danger');
        rmvbtn.addEventListener('click', function(){
            removeitem(newitemid);
        });
    
        newitem.appendChild(document.createTextNode(item));
        newitem.appendChild(rmvbtn);
        newitem.setAttribute('id', newitemid);
        newitem.addEventListener('click', function(){
            finish(newitemid);
        });

        newitem.classList.add('list-group-item');
    
        list.appendChild(newitem);
    }

    let meme = 'ba' + parseInt('a') + 'a';
    console.log(meme.toLowerCase());
}

function undo(){
    if(latest_item_id.length > 0){
        let elem = latest_item_id.pop();
        document.getElementById(elem).classList.remove('active');
        document.getElementById(elem).classList.remove('finito');
    }
    else{
        console.log('empty');
    }
}

function finish(itemid){
    document.getElementById(itemid).classList.add('active');
    document.getElementById(itemid).classList.add('finito');

    latest_item_id.push(itemid);
}

function removeitem(itemid){
    let li = document.getElementById(itemid);
    li.remove();
    if(latest_item_id.includes(itemid)){
        for(let i = 0; i < latest_item_id.length; i++){
            if(latest_item_id[i] === itemid){
                latest_item_id.splice(i, 1);
                return;
            }
        }
    }
}

document.getElementById('addItem').onclick = addItem;
document.getElementById('undo').onclick = undo;