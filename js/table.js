// 新增数据函数
function addrow(){
    var table = document.getElementById("table");
    // console.log(tabble);
    var length = table.rows.length;
    // 获取插入位置
    // console.log(length); 
    var newRow = table.insertRow(length);
    console.log(newRow);
    // newRow.innerHTML="1234565";

    // 插入列节点对象
    var nameCol = newRow.insertCell(0);
    var teleCol = newRow.insertCell(1);
    var operateCpl = newRow.insertCell(2);

    // console.log(nameCol);

    // 插入数据
    nameCol.innerHTML = "未命名";
    teleCol.innerHTML = "未命名";
    operateCpl.innerHTML = '<button onclick ="editRow(this)">编辑</button><button onclick="deleterow(this)">删除</button>'
}

function deleterow(button){
    var row = button.parentNode.parentNode;
    console.log(row);
    row.parentNode.removeChild(row);

}

function editRow(button){
    // console.log(editRow);
    var row = button.parentNode.parentNode;
    var name = row.cells[0];
    var tele = row.cells[1];
    var operate = row.cells[2];

    var inputName = prompt("请输入姓名:");
    var inputTele = prompt("请输入电话:");

    name.innerHTML = inputName;
    tele.innerHTML = inputTele;
}