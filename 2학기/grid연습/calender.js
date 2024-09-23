// 이전/다음 버튼 클릭하면 이전달/다음달로 변경하자

// 현재 날짜 구하자
currentDate = new Date();

// 년도 구하기
const year = currentDate.getFullYear();
// 월 구하기
const month = currentDate.getMonth();

// 제목표시
// html -> js 변수 가져오기
const calenderHeader = document.getElementById("calender-header");
const calenderHeaderH1 = calenderHeader.getElementsByTagName("h1")[0];
// const tempH1 = document.querySelector("#calender-header h1");

// js 변수에 innerHTML = `${year}년 ${month + 1}월`
calenderHeaderH1.innerHTML = `<i>${year}년 ${month + 1}월</i>`;

console.log(`${year}년 ${month + 1}월`);



// if(document.getElementById())