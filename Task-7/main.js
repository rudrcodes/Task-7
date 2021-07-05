let time = prompt("Enter time : ");
id = document.getElementById("counter");
id.innerHTML = time;
function start() {
  setInterval(() => {
    time--;
    if (time >=0) {
      id = document.getElementById("counter");
      id.innerHTML = time;
    }
    //  break;
    else
    alert("TIME COMPLETED");
}, 1000);
}


