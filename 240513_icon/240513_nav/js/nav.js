// 반응형 웹의 Js에서 하는 일
// 1. html 요소를 변수로 가져옴
// 2. 이벤트 처리를 한다. (click, focus, mouseup, ...)
// 3. class를 수정하여 style을 적용한다.

//html .nav-toggle 가져와서 js 변수     navToggleDiv
//html .nav-list 가져와서 js 변수       navListUl
//html .nav-toggle > i -> js 변수       toggleI

//navToggleDiv 클릭 이벤트 처리

    //navListUl을 보이자. show-menu 클래스 추가하자/제거하자
    //toggleI bi-list <-> bi-x-lg
function toggleMenu() {
    // const navToggleDiv = document.getElementsByClassName("nav-toggle")[0];
    const navToggleDiv = document.getElementById("nav-toggle");
    const navListUl = document.getElementsByClassName("nav-list")[0];
    const toggleI = navToggleDiv.getElementsByTagName("i")[0];

    navToggleDiv.onclick = (event) => {
        navListUl.classList.toggle("show-menu");

        toggleI.classList.toggle("bi-list");
        toggleI.classList.toggle("bi-x-lg");
        // toggleI.classList.remove("bi-list");
        // toggleI.classList.add("di-x-lg");
        // toggleI.classList.remove("di-x-lg");
        // toggleI.classList.add("di-x-lg");
    }
}
toggleMenu();


// function 함수명(파라1, 파라2) {
//     명령1;
//     return 리턴값;
// }
// 함수명(아규1, 아규2);

// function (파라1, 파라2) {
//     명령1;
//     return 리턴값;
// }

// (파라1, 파라2) => {
//     명령1;
//     return 리턴값;
// }

// (파라1, 파라2) => 리턴값;