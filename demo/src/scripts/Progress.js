

let num_msg = 2;
let block1 = document.getElementById("1");


function send(){
    let msg = document.getElementById("textarea").value;

    let block = document.createElement('div');
    block.setAttribute("id",""+num_msg);

    let recall = document.createElement('button');

    recall.onclick = function(){remove(block.id)};
    recall.innerHTML = "Recall";
    recall.setAttribute("class","recall");

    let box = document.createElement('div');
    box.setAttribute("class","message_box");

    if(num_msg%4==0){
        box.style.backgroundColor = '#F9E79F';
    }
    else if (num_msg%4==1){
        box.style.backgroundColor = '#F4D03F';
    }
    else if (num_msg%4==2){
        box.style.backgroundColor = '#FFA07A';
    }
    else{
        box.style.backgroundColor = '#DAF7A6'; 
    }
    let bg_color = box.style.backgroundColor;

    block.appendChild(box);
    block.appendChild(recall);
    let textnode = document.createTextNode(msg + "    --------Customer");
    box.appendChild(textnode);

    let block1 = document.getElementById("1");
 

    let msg_boxes = document.getElementById("msg_boxes");
    msg_boxes.insertBefore(block,msg_boxes.firstChild);

    num_msg++;


}


function remove(id){

    let i = parseInt(id);
    let msg_boxes = document.getElementById("msg_boxes");
    let child = document.getElementById(id);
    msg_boxes.removeChild(child);

}
