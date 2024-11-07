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

let allData; //모든 초기화 정보 세탁기, 시간, 호실 정보
let weeklyReservation; //미리 요일별로 예약된 정보
let newResvation; //사용자가 입력하고 있는 예약 정보
let reservations; //사용자가 예약 완료한 정보들

const initData = async () => {
    // allData 가져오기
    const getAllData = async (url) => {
        return fetch(url)
        .then(response => response.json())
        .then((data => {return data}))
        .catch(error => console.error(error.message));
    }

    // weeklyReservation 가져오기
    const getWeeklyReservation = async (url) => {
        try {
            const response = await fetch(url); // await 추가
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error.message);
        }
    }

    // allData 호출 (구현 내용은 비어 있음)
    const allData = await getAllData("js/allData.json"); // 비어있는 함수 호출
    // weeklyReservation 호출
    const weeklyReservations = await getWeeklyReservation("js/weekly-reservation.json");
}

const setPage = (page) => {
    //clear selection
    for (const selectionItemDiv of selectionItemDivs) {
        selectionItemDiv.classList.remove("select");
    }
    //select selection
    if (selectionItemDivs.length >= page) {  // 4page selection은 없음
        selectionItemDivs[page - 1].classList.add("select");
    }


    // clear pagas
    pageDivs.forEach(pageDiv => {
        pageDiv.style.display = "none"; // 모든 페이지 안 보이게 처리
    })

    // show pagas
    pageDivs[page - 1].style.display = "block";
}

initData();
setPage(1);