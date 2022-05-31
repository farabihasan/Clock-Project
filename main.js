let childDiv = document.querySelector('.child-div');
let child = childDiv.querySelector('#child');
let child1 = childDiv.querySelector('#child-1');
let dateTime = childDiv.querySelector('#dateTime');

// names of day and month
let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function makeClock() {
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let day = d.getDay();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();



    // formating time
    h = h % 12 || 12;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    period = h < 12 ? 'PM' : 'AM';
    date = date < 10 ? '0' + date : date;

    child.innerHTML = h + ':' + m + ':' + s + period;
    child1.innerHTML = month + 1 + '/' + date + '/' + year;

    dateTime.innerHTML = dayNames[day] + ', ' + monthNames[month];

}


makeClock();
setInterval(makeClock, 1000);