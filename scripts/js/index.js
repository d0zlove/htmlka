//пример комментирования

function start() {
    hackjopi(0);
}

function clamp(num, hi, low) {
    if (num > hi)
        num -= 2000;
    if (num < low)
        num += 1000

    return num;
}

function hackjopi(i) {
    if (i <= 100) {
        var randomNum = Math.floor(Math.random() * 100) + 1;
        var randomNumForTimeOut = clamp(Math.floor(Math.random(0, 6) * 10000, 5000, 1000));
        if (i == randomNum) {
            setTimeout(function () {
                document.getElementById("output").textContent = "Взлом жопы %: " + i;
                hackjopi(i + 1);

            }, randomNumForTimeOut);
        } else {
            setTimeout(function () {
                document.getElementById("output").textContent = "Взлом жопы %: " + i;
                hackjopi(i + 1);
            }, 100);
        }
    }
    else {
        setTimeout(function () {
            design("vzlom");

            var button = document.getElementById("myButton");
            if (button) {
                button.parentNode.removeChild(button);
            }
            var p = document.getElementById("output");
            if (p) {
                p.parentNode.removeChild(p);
            }

        }, 2500);
    }
}


function design(pName) {
    document.getElementById(pName).textContent = "Жопа взломана";
    const outputElement = document.getElementById(pName);
    document.body.style.backgroundColor = "black";
    document.body.style.fontSize = "100px";
    document.body.style.height = "100vh";
    outputElement.style.color = "green";
    outputElement.style.position = "fixed";
    outputElement.style.top = "50%";
    outputElement.style.left = "50%";
    outputElement.style.transform = "translate(-50%, -50%)";
}