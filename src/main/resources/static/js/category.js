window.onload = function() { makeCategoryTable(); }

function makeCategoryTable() {
    $.ajax({
        url: '/categories', 
        data: '',
		method: 'GET',
		dataType: 'json',
		success: function(data) {
            let categoryLength = data.length;
            let categoryTableElem = document.getElementById("categoryTable");

            for (var i = 0; i < categoryLength; i++) {
                // 요소 생성
                let categoryTr = document.createElement("tr");
                let categoryTdName = document.createElement("td");
                let categoryTdDel = document.createElement("td");
                let categoryTdModify = document.createElement("td");
                let categoryTdDelButton = document.createElement("button");
                let categoryTdUpButton = document.createElement("button");
                let categoryTdDownButton = document.createElement("button");

                // 변수
                let categoryId = data[i].id;
                let categoryName = data[i].content;
                let idx = i;

                // 요소에 내용 추가
                categoryTdName.textContent = categoryName;
                categoryTdName.id ="categoryTdId" + i;
                categoryTdDelButton.innerHTML = "삭제" + data[i].id;
                categoryTdDelButton.onclick = function() { deleteCategory(categoryId); };
                categoryTdUpButton.innerText = "위로";
                categoryTdUpButton.onclick = function() { upCategory(categoryId); };
                categoryTdDownButton.innerText = "아래로";
                categoryTdDownButton.onclick = function() { downCategory(categoryId); };

                categoryTdDelButton.setAttribute('class', 'btn btn-secondary btn-outline-danger');
                categoryTdUpButton.setAttribute('class', 'btn btn-secondary');
                categoryTdDownButton.setAttribute('class', 'btn btn-secondary');

                // 붙이기
                categoryTdDel.appendChild(categoryTdDelButton);
                categoryTdModify.append(categoryTdUpButton, categoryTdDownButton);
                categoryTr.append(categoryTdName, categoryTdModify, categoryTdDel);
                categoryTableElem.appendChild(categoryTr);
            }
        }, 
        error: function() {
			alert("데이터를 가져오는 중 에러가 발생했습니다.");
		}
    })
}


function deleteCategory(categoryId) {
    alert(categoryId);
}

function upCategory(categoryId) {
    alert(categoryId);
}

function downCategory(categoryId) {
    alert(categoryId);
}





// 카테고리 이름 수정
function modifyCategory(idx, categoryName, categoryId) {
    // 테이블에 있는 카테고리 이름 가져와서, type과 id 변경
    let categoryNameDom = document.getElementById("categoryTdId" + idx);
    categoryNameDom.innerHTML = "<input type='text' id='categoryTextId" + idx + "' " 
                                + "placeholder='" + categoryName + "' " 
                                + "onkeydown='reqModifyCategory(event, "+ idx + ", " + categoryId +")' " + "'>";
}
// 카테고리 이름 수정 - 요청
function reqModifyCategory(event, idx, categoryId) {
    // 엔터 누를 경우 실행
    if (event.keyCode == 13) {
        let newCategoryName = document.getElementById("categoryTextId" + idx).value;
        alert(categoryId + " " + newCategoryName);
    }
}