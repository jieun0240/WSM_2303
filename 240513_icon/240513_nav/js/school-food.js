let currentDate = new Date();

const displayDate = () => {
    let days = "일월화수목금토";
    let maonth = currentDate.getMonth() + 1;    //현재 달 불러오기기
    let date =  currentDate.getDate();  //현재 날짜 불러오기
    let day = currentDate.getDay();    //요일 (0: 일 1: 월)
    days = days.split("");  // days 내용을 쪼개줌
    
    const schoolFoodTitleHeader = document.getElementsByClassName("school-food-title")[0];
    const titleText = `🍚 ${days[day]}요일(${maonth}/${date})의 메뉴 🍚`
    schoolFoodTitleHeader.innerText = titleText;
}

const changeDate = (diff) => {
    currentDate.setDate(currentDate.getDate() + diff);

    const dateData = currentDate.toISOString().slice(0, 10).replace(/-/g, "");  //2024-05-23 -> 20240523
    displayDate();  //화면에 변경된 날짜를 표시
}