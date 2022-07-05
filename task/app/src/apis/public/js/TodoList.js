"use strict";
import * as ToDoListFunction from "./functions.js";

const listArr = [];

const inputBox = document.querySelector("#inputContent"),
    addBtn = document.querySelector("#addBtn"),
    listBox = document.querySelector("#listBox");

// const test = async () => {
//     const test2 = await ToDoListFunction.loadList();
//     console.log("test2->", test2);

//     return test2;
// };

// inputBox.value = "";
//입력창 초기화

addBtn.addEventListener("click", e => {
    // ToDoListFunction.addList();
    // plus();
    createList();
    console.log(listArr);
});

inputBox.addEventListener("keyup", e => {
    if (e.keyCode === 13) {
        ToDoListFunction.addList();
        plus();
    }
});

let list_count = 0; // 리스트 수

function createList() {
    list_count++;

    const list = document.createElement("li");
    list.classList.add("todoList");
    listBox.appendChild(list);

    const delBtn = document.createElement("button"); //삭제버튼
    delBtn.classList.add("delBtn");
    delBtn.innerText = "x";
    list.appendChild(delBtn);

    const todoContent = document.createElement("div"); //할 일 내용
    todoContent.innerText = inputBox.value;
    todoContent.classList.add("todoContent");
    list.appendChild(todoContent);

    const editBtn = document.createElement("button"); //수정버튼
    editBtn.classList.add("editBtn");
    editBtn.innerText = "수정";
    list.appendChild(editBtn);

    const editContent = document.createElement("input"); //할 일 내용 (input태그)
    editContent.type = "text"; //할 일 내용(input)을 type = 'text'로 변경
    editContent.style.display = "none"; //수정칸 숨김
    editContent.classList.add("todoContent");
    list.appendChild(editContent);

    listArr.push(list);
}

/*

function strikeSetting() {
    list_count++;

    if (list_count > 1) {
        list.style.borderTop = "1px solid #F1F3F5";
    }
}

function plus() {
    createItem();
    itemSetting();
    strikeSetting();

    if (!inputBox.value) {
        alert("내용을 입력해 주세요!");
        //빈 내용 입력 시 msg출력
    } else {
        todoContent.innerText = inputBox.value;
        editContent.value = inputBox.value;
        listBox.appendChild(list);
        inputBox.value = "";

        appendItem();

        let line_count = 0;
        let count = 0;
        //수정 버튼 클릭 횟수

        list.addEventListener("click", function () {
            line_count++;
            line_count % 2 == 1
                ? (todoContent.style.textDecoration = "line-through")
                : (todoContent.style.textDecoration = "");
            // 취소선 삽입, 삭제
        });

        delBtn.addEventListener("click", function () {
            list.remove(); //웹에서 삭제
            deleteList(); //DB에서 삭제
        });

        editBtn.addEventListener("click", function () {
            editMethod();
        });
        editContent.addEventListener("keyup", event => {
            if (event.keyCode === 13) {
                editMethod();
            }
        });

        function editMethod() {
            count++;
            if (count % 2 === 1) {
                todoContent.style.display = "none"; // 홀수 번째 클릭 시 할 일 리스트 숨김
                editContent.style.display = "block"; // 홀수 번째 클릭 시 수정창 숨김해제
                editBtn.innerText = "완료"; //수정버튼 수정 -> 완료  텍스트 변환
                todoContent.style.backgroundColor = "#ffffff"; //수정중에 수정 창 배경 색 변환
            } else {
                editList();
                todoContent.style.display = "block"; // 짝수 번째 클릭 시 할 일 리스트 숨김해제
                editContent.style.display = "none"; // 짝수 번째 클릭 시 수정창 숨김
                todoContent.innerText = editContent.value; //할 일 리스트에 수정 값 입력
                editBtn.innerText = "수정"; // 수정버튼 완료 -> 수정 텍스트 변환
                todoContent.style.backgroundColor = "";
            }
        }
    }
}
*/
