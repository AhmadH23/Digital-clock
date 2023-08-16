function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var mins = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session')
    var date = dateTime.getDate();
    var month = dateTime.getMonth() + 1;
    var year = dateTime.getFullYear();
    
    if(hrs >= 12){
        session.innerHTML = "PM"
    } else {
        session.innerHTML = 'AM'
    }

    document.getElementById('hours').innerHTML = hrs
    document.getElementById('minutes').innerHTML = mins
    document.getElementById('seconds').innerHTML = sec
    document.getElementById('date').innerHTML = date
    document.getElementById('month').innerHTML = month
    document.getElementById('year').innerHTML = year

}
setInterval(displayTime, 1000);

