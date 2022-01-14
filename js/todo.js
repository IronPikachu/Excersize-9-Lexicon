var is_NaN = localStorage.getItem('li_item_index');
var li_item_index = (is_NaN == NaN ? 0 : is_NaN);
var is_empty = JSON.parse(localStorage.getItem('latest_item_id'));
var latest_item_id = (is_empty ? is_empty : []);

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

    console.log(('ba' + parseInt('a')).toLowerCase());
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
    let item = document.getElementById(itemid);
    if(item){
        item.classList.add('active');
        item.classList.add('finito');
        
        latest_item_id.push(itemid);
    }
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

window.onload = function(){
    if(true){
        document.getElementById('itemList').innerHTML = localStorage.getItem('itemList');
        let listOfIds = document.querySelectorAll('[id^="li_number_"]');
        listOfIds.forEach(idElement => {
            idElement.addEventListener('click', function(){
                finish(idElement.id);
            });
            idElement.getElementsByTagName('button')[0].addEventListener('click', function(){
                removeitem(idElement.id);
            });
        });
    }
    else{
        console.log('Activate onload!')
    }
}

window.onbeforeunload = function(){
    localStorage.setItem('itemList', document.getElementById('itemList').innerHTML);
    localStorage.setItem('li_item_index', li_item_index);
    localStorage.setItem('latest_item_id', JSON.stringify(latest_item_id));
}