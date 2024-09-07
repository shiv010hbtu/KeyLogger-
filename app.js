// const logDiv=document.getElementById("log");
// const stateDiv=document.getElementsById("state");
// const startBtn=document.getElementById("start-Btn");
// const stopBtn=document.getElementById("stop-Btn");

// startBtn.addEventListener("click",()=>{
//     document.addEventListener("keydown",handleDown);
//     document.addEventListener("keyup",handleUp);
// })

// stopBtn.addEventListener("click",()=>{
//     document.removeEventListener("keydown",handleDown);
//     document.removeEventListener("keyup",handleUp);
//     logDiv.textContent="";
//     stateDiv.textContent="";
// })

// function handleDown(e){
//     logDiv.textContent=`key ${e.key} pressed down`;
//     stateDiv.textContent="key is down"

// }
// function handleUp(e){
//     logDiv.textContent=`key ${e.key} pressed up`;
//     stateDiv.textContent="key is up"
// }

const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state"); // Fixed the typo
const startBtn = document.getElementById("start-Btn");
const stopBtn = document.getElementById("stop-Btn");

startBtn.addEventListener("click", () => {
    document.addEventListener("keydown", handleDown);
    document.addEventListener("keyup", handleUp);
});

stopBtn.addEventListener("click", () => {
    document.removeEventListener("keydown", handleDown);
    document.removeEventListener("keyup", handleUp);
    logDiv.textContent = "";
    stateDiv.textContent = "";
});

function handleDown(e) {
    logDiv.textContent = `key ${e.key} pressed down`;
    stateDiv.textContent = "key is down";
}

function handleUp(e) {
    logDiv.textContent = `key ${e.key} pressed up`;
    stateDiv.textContent = "key is up";
}

