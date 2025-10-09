function fisheyeMove() { //combine the first 3 functions into 1 eventually
    var x = document.getElementById("zoomOne");
    var y = document.getElementById("zoomTwo");
    var q = document.getElementById("boxOne");
    var p = document.getElementById("boxTwo");
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

function fisheyeMoveTwo() {
    var x = document.getElementById("zoomOne");
    var y = document.getElementById("zoomTwo");
    var q = document.getElementById("boxOne");
    var p = document.getElementById("boxThree");
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

function fisheyeMoveThree() {
    var x = document.getElementById("zoomOne");
    var y = document.getElementById("zoomTwo");
    var q = document.getElementById("boxOne");
    var p = document.getElementById("boxFour");
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

function nextStop() {
    const stops = [document.getElementById("stopOne"), document.getElementById("stopTwo"), document.getElementById("stopThree")];
    for(let j = 0; j < stops.length; j++)
    {
        console.log("outer " + j);
        if(stops[j].style.display === "block" && j < stops.length-1)
        {
            stops[j].style.display = "none";
            stops[j+1].style.display = "block";
            console.log(j);
            break;
        } else if(j === stops.length-1)
        {
            stops[j].style.display = "none";
            stops[0].style.display = "block";
            console.log(j);
            break;
        }
    }
}

function prevStop() {
    const stops = [document.getElementById("stopOne"), document.getElementById("stopTwo"), document.getElementById("stopThree")];
    const lastStop = stops.length-1;
    for(let i = stops.length-1; i >= 0; i--)
    {
        console.log(i);
        if(stops[i].style.display === "block" && i > 0)
        {
            stops[i].style.display = "none";
            stops[i-1].style.display = "block";
            console.log(i);
            break;
        } else if(i === 0)
        {
            stops[i].style.display = "none";
            stops[lastStop].style.display = "block";
            console.log(i);
            break;
        }
    }
}

function stopTrain(stopNum) {
    const trainIn = document.getElementsByClassName("trainInside");
    const trainOut = document.getElementById("bg");
    const doorsOpen = document.getElementById("doorsOpen");
    const doorsClosed = document.getElementById("doorsClosed");
    trainOut.style.backgroundImage = "url('')";
    trainOut.style.animationDuration = "200000s";
    //console.log(trainIn);
    for(let el of trainIn){
        //console.log(el);
        el.style.animationDuration = "5s";
        if(el.style.animationDuration = "5s")
        {
            el.addEventListener("animationiteration", () =>{
                el.style.animationPlayState = "paused";
                trainOut.style.animationPlayState = "paused";
                doorsOpen.style.display = "none";
                doorsClosed.style.display = "block";
                if(stopNum === '1')
                {
                    trainOut.style.backgroundColor = "#000000";
                    goToStop('1');
                    console.log("stop one");
                }
                if(stopNum === '2')
                {
                    trainOut.style.backgroundColor = "#7f00adff";
                    goToStop('2');
                    console.log("stop two");
                }
                if(stopNum === '3')
                {
                    trainOut.style.backgroundColor = "#0000ff";
                    goToStop('3');
                    console.log("stop three");
                }
            });
        }
    }
}

function goToStop(stopNum) {
    const outside = document.getElementById("outsideLeft");
    if(stopNum === '1')
    {
        outside.href = "station_center.html";
    }
    if(stopNum === '2')
    {
        outside.href = "void_beach.html";
    }
    if(stopNum === '3')
    {
        outside.href = "sector_5_station_a.html";
    }
}