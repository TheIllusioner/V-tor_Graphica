function fisheyeMove(diagOption) {
    var x = document.getElementById("zoomOne");
    var y = document.getElementById("zoomTwo");
    var q = document.getElementById("boxOne");
    var p = document.getElementById(diagOption);
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        q.style.display = "block";
        p.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
        q.style.display = "none";
        p.style.display = "block";
    }
}

const stops = ["Next Stop: V-Tor Graphica / Station Center", "Next Stop: V-Tor Graphica / Void Beach", "Next Stop: Proxia / Sector 5 Autostine Tech Station-A"];
const stop = document.getElementsByClassName("stop");

function nextStop() {
    stopChanged = false;
    j = 0;
    while(!stopChanged){
        if(j < stops.length-1 && stop[0].innerHTML === stops[j]){
            stop[0].innerHTML = stops[j+1];
            stop[1].innerHTML = stops[j+1];
            stopChanged = true;
        }
        else if (j === stops.length-1 && stop[0].innerHTML === stops[j]){
            j = 0;
            stop[0].innerHTML = stops[j];
            stop[1].innerHTML = stops[j];
            stopChanged = true;
        }
        j++;
    }
}

function prevStop() {
    stopChanged = false;
    j = stops.length-1;
    while(!stopChanged){
        if(j > 0 && stop[0].innerHTML === stops[j]){
            stop[0].innerHTML = stops[j-1];
            stop[1].innerHTML = stops[j-1];
            stopChanged = true;
        }
        else if (j === 0 && stop[0].innerHTML === stops[j]){
            j = stops.length-1;
            stop[0].innerHTML = stops[j];
            stop[1].innerHTML = stops[j];
            stopChanged = true;
        }
        j--;
    }
}

function stopTrain() {
    const trainIn = document.getElementsByClassName("trainInside");
    const trainOut = document.getElementById("bg");
    const doorsOpen = document.getElementById("doorsOpen");
    const doorsClosed = document.getElementById("doorsClosed");
    trainOut.style.backgroundImage = "url('')";
    //console.log(trainIn);
    for(let el of trainIn){
        el.style.animationPlayState = "paused";
        trainOut.style.animationPlayState = "paused";
        doorsOpen.style.display = "none";
        doorsClosed.style.display = "block";
        if(stop[0].innerHTML === stops[0])
        {
            trainOut.style.backgroundColor = "#000000";
            goToStop('1');
            console.log("stop one");
        }
        if(stop[0].innerHTML === stops[1])
        {
            trainOut.style.backgroundColor = "#7f00adff";
            goToStop('2');
            console.log("stop two");
        }
        if(stop[0].innerHTML === stops[2])
        {
            trainOut.style.backgroundColor = "#0000ff";
            goToStop('3');
            console.log("stop three");
        }
    }
}

function goToStop(stopNum) {
    const outsideL = document.getElementById("outsideLeft");
    const outsideR = document.getElementById("outsideRight");

    if(stopNum === '1')
    {
        outsideL.href = "station_center.html";
        outsideR.href = "station_center.html";
    }
    if(stopNum === '2')
    {
        outsideL.href = "void_beach.html";
        outsideR.href = "void_beach.html";
    }
    if(stopNum === '3')
    {
        outsideL.href = "sector_5_station_a.html";
        outsideR.href = "sector_5_station_a.html";
    }
}