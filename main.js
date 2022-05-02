var start = document.getElementById('button-start');
var stop = document.getElementById('button-stop');
var reset = document.getElementById('button-reset');
var seconds = document.getElementById('secs');
var miliseconds = document.getElementById('milisec');

var secF = 0;
var secS = 0;

var interval;

function timerInterval ()
{
    secS++;


    if(secS <=9)
    {
        miliseconds.innerHTML = "0" + secS
    }
    if(secS > 9)
    {
        miliseconds.innerHTML=secS
    }

    if(secS >99)
    {
        secF++
        seconds.innerHTML = "0"+ secF;
        secS =0;
        miliseconds.innerHTML = "0" + secS


    }
    if(secF>9)
    {
        seconds.innerHTML = secF;
    }
}

function startTimer ()
{
    interval= setInterval(timerInterval,10)
}

function stopTimer ()
{
    clearInterval(interval);
    
}

function resetTimer ()
{
    secF ="00";
    secS ="00";

    seconds.innerHTML=secF;
    miliseconds.innerHTML=secF;
}

