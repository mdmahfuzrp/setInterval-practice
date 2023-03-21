const count = document.getElementById('count');
let intervalId;
document.getElementById('start').addEventListener('click', ()=>{
    let num = parseInt(count.innerText);
    intervalId = setInterval(() => {
        count.innerText = ++num;
    }, 1000);
});

document.getElementById('stop').addEventListener('click', ()=>{
    clearInterval(intervalId);
})
document.getElementById('reset').addEventListener('click', ()=>{
    count.innerText = 0;
    clearInterval(intervalId);
})