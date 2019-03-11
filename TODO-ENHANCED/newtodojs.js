$(function(){
        $(".blink").typed({
            strings: ["enter todo"],
            typeSpeed: 0,
            callback: function () {
                $(".typed-cursor").hide();
            }
        });
    });


var add = document.getElementById('add');
var removeAll = document.getElementById('removeall');
var list = document.getElementById('list');


//remove all button

removeAll.onclick = function(){
    list.innerHTML = '';
}

//adding a new list element

add.onclick = function(){
    addlis(list);
    document.getElementById('userinput').value = '';
    document.getElementById('userinput').focus();
}

function addlis(list){
    var inputText = document.getElementById('userinput').value;
    var li = document.createElement('li');
    var textNode = document.createTextNode(inputText + ' ');
    var removeButton = document.createElement('button');
    
    if(inputText != ''){
        removeButton.className = 'btn btn-xs btn-danger';
        removeButton.innerHTML = ' &times; ';
        removeButton.setAttribute('onclick', 'removeMe(this)');
        
        
        li.appendChild(textNode);
        li.appendChild(removeButton);
        list.appendChild(li);
    } else {
        alert("Please enter a todo");
    }
    
    
    
    
}

function removeMe(item){
    var p = item.parentElement;
    p.parentElement.removeChild(p);
}













