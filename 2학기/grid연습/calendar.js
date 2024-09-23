// 현재 날짜 구하자
currentDate = new Date();

// html -> js 변수 가져오기
const calendarHeader = document.getElementById("calendar-header");
const calendarHeaderH1 = calendarHeader.getElementsByTagName("h1")[0];
// const tempH1 = document.querySelector("#calender-header h1");

// 이전/다음 버튼을 클릭 했을 때 , 이전 달/다음 달로 변경하자
// html -> js 변수
// click event 발생했을 때, 해야할 일 정하자
const prevMonthBtn = document.getElementById("prev-month");
// prevMonthBtn.addEventListener("click", console.log("이전"));
prevMonthBtn.addEventListener("click", () => changeMonth(-1));

const nextMonthBtn = document.querySelector("#next-month");
nextMonthBtn.onclick = () => changeMonth(1);

// -1 : 이전 달, 0: 현재 달, 1: 디음 달
const changeMonth = (diff) => {
    currentDate.setMonth(currentDate.getMonth() + diff);
    // 년도 구하기
    const year = currentDate.getFullYear();
    // 월 구하기
    const month = currentDate.getMonth();
    // 제목 바꾸기
    console.log(`${year}년 ${month + 1}월`);
    // js 변수에 innerHTML = `${year}년 ${month + 1}월`
    calendarHeaderH1.innerHTML = `<i>${year}년 ${month + 1}월</i>`;
}

changeMonth(0); // 현재 달 출력