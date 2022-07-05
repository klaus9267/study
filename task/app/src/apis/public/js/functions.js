const loadList = async () => {
    const arr = [];
    // response 리턴할 변수 (받은 데이터 저장)

    await fetch("/home", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(),
    })
        .then(response => response.json())
        .then(json => json.data)
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                arr.push(data[i].todo);
            }
        });
    return arr;
    // response 에 저장
};
// DB에서 list가져와 화면에 출력

const addList = () => {
    const req = {
        addList: inputBox.value,
    };
    fetch("/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    });
};
// DB에 추가

const editList = () => {
    const req = {
        editList: editText.value,
        beforeText: todolistText.innerText,
    };

    fetch("/", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    });
};
// DB에서 수정

const deleteList = () => {
    const req = {
        deleteList: todolistText.innerText,
    };
    fetch("/", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    });
};
// DB에서 삭제

function editMethod() {
    count++;
    if (count % 2 === 1) {
        todolistText.style.display = "none"; // 홀수 번째 클릭 시 할 일 리스트 숨김
        editText.style.display = "block"; // 홀수 번째 클릭 시 수정창 숨김해제
        editBtn.innerText = "완료"; //수정버튼 수정 -> 완료  텍스트 변환
        todolistText.style.backgroundColor = "#ffffff"; //수정중에 수정 창 배경 색 변환
    } else {
        editList();
        todolistText.style.display = "block"; // 짝수 번째 클릭 시 할 일 리스트 숨김해제
        editText.style.display = "none"; // 짝수 번째 클릭 시 수정창 숨김
        todolistText.innerText = editText.value; //할 일 리스트에 수정 값 입력
        editBtn.innerText = "수정"; // 수정버튼 완료 -> 수정 텍스트 변환
        todolistText.style.backgroundColor = "";
    }
}

export { loadList, addList, editList, deleteList };
