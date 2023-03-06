const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = totalTime * 2/5;
const holdTime = totalTime * 1/5;


breatheAnimation();

function breatheAnimation(){
    text.innerText = "Breathe In!";
    container.className = "container grow";

    setTimeout(() => {
        text.innerText = "Hold";

        setTimeout(() => {
            text.innerText = "Breathe out";
            container.className = "container shrink";
        }, holdTime);
    }, breatheTime);


}

setInterval(breatheAnimation, totalTime);