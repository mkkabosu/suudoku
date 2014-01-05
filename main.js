function main(){
    console.log("start");
    var container = document.getElementById("container");
    var table = document.createElement("table");
    table.setAttribute('width',500);
    table.setAttribute('height',500);
    table.setAttribute('border',1);
    table.setAttribute('bordercolor',"#333333");
    table.setAttribute('cellspacing',0);
    table.setAttribute('cellpadding',5);
    
    var tb = document.createElement("tbody");

    var row1 = document.createElement("tr");
    var row2 = document.createElement("tr");
    var row3 = document.createElement("tr");

    var data1 = document.createElement("td");
    var data2 = document.createElement("td");
    var data3 = document.createElement("td");
    var data4 = document.createElement("td");
    
    data1.innerHTML = " poyo ";
    data2.innerHTML = " piyo ";
    data3.innerHTML = " fuga ";
    data4.innerHTML = " hoge ";
    
    row1.appendChild(data1);
    row1.appendChild(data2);
    row2.appendChild(data3);
    row2.appendChild(data4);

    tb.appendChild(row1);
    tb.appendChild(row2);
    table.appendChild(tb);
    container.appendChild(table);
}
function mkdata(text){
    var td = document.createElement("td");
    td.innerHTML = text;
    return td;
}

window.onload = main;
