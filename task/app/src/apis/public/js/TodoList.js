"use strict";

import * as ToDoListFunction from "./functions.js";

const inputBox = document.querySelector("#inputContent"),
    addBtn = document.querySelector("#addBtn"),
    listBox = document.querySelector("#listBox"),

const loadData = async (no, todo) => {
    let data = [no, todo];
    return data;
};

const loadList = async () => {
    const listData = await ToDoListFunction.viewList();

    listData.forEach(data => {
        createList(data.no, data.todo);
        loadData(data.no, data.todo);
    });
};
loadList();

let listCount = 0;
let isCheck = false;

addBtn.addEventListener("click", () => {
    inputCheck();
});

inputBox.addEventListener("keyup", e => {
    if (e.keyCode === 13) {
        inputCheck();
    }
});

// ------------------------------------------functions------------------------------------------

const createList = (no, todo) => {
    let clickCount = 0;
    listCount = no;

    const list = document.createElement("li");
    list.classList.add("todoList");
    listBox.appendChild(list);

    if (listCount > 1) {
        list.style.borderTop = "1px solid #F1F3F5";
    }

    const delBtn = document.createElement("button"); //삭제버튼
    delBtn.classList.add("delBtn");
    delBtn.innerText = "x";
    list.appendChild(delBtn);

    const todoContent = document.createElement("div"); //할 일 내용
    todoContent.innerText = todo;
    todoContent.classList.add("todoContent");
    list.appendChild(todoContent);

    const editContent = document.createElement("input"); //할 일 내용 (input태그)
    editContent.type = "text"; //할 일 내용(input)을 type = 'text'로 변경
    editContent.style.display = "none"; //수정칸 숨김
    editContent.classList.add("todoContent");
    list.appendChild(editContent);

    const editBtn = document.createElement("button"); //수정버튼
    editBtn.classList.add("editBtn");
    editBtn.innerText = "수정";
    list.appendChild(editBtn);

    delBtn.addEventListener("click", () => {
        list.remove();
        ToDoListFunction.deleteList(no);
    });

    (editBtn || editContent).addEventListener("click" || "keyup", e => {
        e.stopPropagation();
        editBtn.innerText === "수정"
            ? editReady(todoContent, editContent, editBtn)
            : editDone(todoContent, editContent, no, editBtn);
    });

    editContent.addEventListener("keyup" || "click", e => {
        e.stopPropagation();
        console.log(1);
        if (e.keyCode === 13) {
            editStatus(todoContent, editContent, no, editBtn);
        }
    });
    list.addEventListener("click", () => {
        clickCount++;
        middleLine(clickCount, todoContent);
        ToDoListFunction.editList(editContent, isCheck, no);
    });
    inputBox.value = "";
};
const editStatus = (content, input, no, btn) => {
    btn.innerText === "수정"
        ? editReady(content, input, btn)
        : editDone(content, input, no, btn);
};

const editReady = (content, input, btn) => {
    input.value = content.innerText;
    content.style.display = "none"; // 홀수 번째 클릭 시 할 일 리스트 숨김
    input.style.display = "block"; // 홀수 번째 클릭 시 수정창 숨김해제
    btn.innerText = "완료"; //수정버튼 수정 -> 완료  텍스트 변환
    content.style.backgroundColor = "#ffffff"; //수정중에 수정 창 배경 색 변환
};

const editDone = (content, input, no, btn) => {
    content.style.display = "block"; // 짝수 번째 클릭 시 할 일 리스트 숨김해제
    input.style.display = "none"; // 짝수 번째 클릭 시 수정창 숨김
    content.innerText = input.value; //할 일 리스트에 수정 값 입력
    content.style.backgroundColor = "";
    btn.innerText = "수정";
    ToDoListFunction.editList(input, isCheck, no);
};

const middleLine = (cnt, content) => {
    if (cnt % 2) {
        content.style.textDecoration = "line-through";
        isCheck = true;
    } else {
        content.style.textDecoration = "";
        isCheck = false;
    }
};

const inputCheck = () => {
    if (!inputBox.value) {
        alert("내용을 입력해 주세요!");
        //빈 내용 입력 시 msg출력
    } else {
        ToDoListFunction.addList(inputBox, isCheck);
        createList(listCount + 1, inputBox.value);
    }
};
