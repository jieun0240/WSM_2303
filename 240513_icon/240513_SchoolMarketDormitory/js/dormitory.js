// 각 페이지 가져오기
const calendarDiv = document.getElementById("calendar");
const selectionWashingmachineTimeDiv = document.getElementById("selection-washingmachine-time");
const selectionRoomNameDiv = document.querySelector("#selection-room-name");
const boarDiv = document.querySelector("#board");

const pageDivs = [calendarDiv, selectionWashingmachineTimeDiv, selectionRoomNameDiv, boarDiv];

// 셀렉션 세개
const selectionItemDivs = document.getElementsByClassName("selection-item");

// calendarDiv.style.display = "block";
// selectionWashingmachineTimeDiv.style.display = "block";
// selectionRoomNameDiv.style.display = "block";
// boarDiv.style.display = "block";

const setPage = (page) => {
    //clear selection
    for (const selectionItemDiv of selectionItemDivs) {
        selectionItemDiv.classList.remove("select");
    }
    //select selection
    if(selectionItemDivs.length >= page) {  // 4page selection은 없음
        selectionItemDivs[page-1].classList.add("select");
    } 


    // clear pagas
    pageDivs.forEach(pageDiv => {
        pageDiv.style.display = "none"; // 모든 페이지 안 보이게 처리
    })

    // show pagas
    pageDivs[page-1].style.display = "block";
}

setPage(1);