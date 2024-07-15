setInterval(showtime, 1000);

function showtime(){
let time = new Date();
let hour = time.getHours();
let min = time.getMinutes();
let sec = time.getSeconds();
let year = time.getFullYear();
let month = time.getMonth();
let day = time.getDate();


let currentdate = year + "-" + month + "-" + day;
document.getElementById("date").innerHTML = currentdate;
am_pm = "AM"

// CONVERTING into 12 hours format
if(hour >=12){
    if(hour>12)
        hour -=12;
    am_pm = "PM";
}else if(hour === 0) {
    hr= 12;
    am_pm = "AM";

}
// using ternary operator of adding zero in start if value is less than 10
hour = hour<10 ? "0" + hour: hour;
min = min<10 ? "0"+ min : min;
sec = sec<10 ? "0" + sec :sec;

let currenttime = hour + ":" + min + ":" + sec + am_pm;

document.getElementById("clock").innerHTML = currenttime;


}

showtime();

let time = new Date();
let year = time.getFullYear();

let month = time.getMonth();
let day = time.getDate();
console.log(year);
console.log(month);
console.log(day);