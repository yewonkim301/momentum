const clock = document.querySelector("#date span:first-child");
const todayDate = document.querySelector("#date span:last-child");

function getDate() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    const year = date.getFullYear();
    const month = date.getMonth() +1;
    const day = date.getDate();
    const dayOfWeekList = ["일", "월", "화", "수", "목", "금", "토"];
    const dayOfWeek = dayOfWeekList[date.getDay()];
    todayDate.innerText = `${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`
}

getDate();
setInterval(getDate, 1000);
