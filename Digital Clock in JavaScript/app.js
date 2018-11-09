
function clock(){

const time = new Date;
const hours = time.getHours();
const minutes = time.getMinutes();
const seconds = time.getSeconds();


document.getElementById('hours').innerHTML = hours+" :";
document.getElementById('minutes').innerHTML = minutes+" :";
document.getElementById('seconds').innerHTML = seconds;

}

setInterval(clock,1000);