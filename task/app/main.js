/** @format */

function show(id1, id2) {
    document.getElementById(id1).style.visibility = "visible";
    document.getElementById(id2).style.visibility = "visible";
}
function hide(id1, id2) {
    document.getElementById(id1).style.visibility = "hidden";
    document.getElementById(id2).style.visibility = "hidden";
}
function changeBtnName() {
    const editBtn = document.getElementById("editBtn");
    let count = 0;
    count++;
    count % 2 == 1
        ? (editBtn.innerText = "완료")
        : (editBtn.innerText = "수정");
}
function fin() {
    let listText = document.getElementById("todolistText");
    listText.style.textDecoration = "line-through";
}

let inputBox = document.getElementById("addTextDiv");
let addToDo = document.getElementById("add");
let toDoList = document.getElementById("todolistBox");
let height_value = document.getElementById("body").value;

addToDo.addEventListener("click", function () {
    let list = document.createElement("div");
    if (!inputBox.value) alert("내용을 입력해 주세요!");
    else {
        list.id = "todolistBox";
        body.height += 68;
        list.innerText = inputBox.value;
        toDoList.appendChild(list);
        inputBox.value = "";
    }
    list.addEventListener("click", function () {
        list.style.textDecoration = "line-through";
    });
});

let height_value = document.getElementById("height_value").value;
document.getElementById("test_obj").style.height = height_value;
