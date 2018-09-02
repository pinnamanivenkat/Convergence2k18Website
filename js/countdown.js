//function getTimeRemaining(endtime) {
//  var t = Date.parse(endtime) - Date.parse(new Date());
//  var seconds = Math.floor((t / 1000) % 60);
//  var minutes = Math.floor((t / 1000 / 60) % 60);
//  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//  var days = Math.floor(t / (1000 * 60 * 60 * 24));
//  return {
//    'total': t,
//    'days': days,
//    'hours': hours,
//    'minutes': minutes,
//    'seconds': seconds
//  };
//}
//
//function initializeClock(id, endtime) {
//  var clock = document.getElementById(id);
//  var daysSpan = clock.querySelector('.days');
//  var hoursSpan = clock.querySelector('.hours');
//  var minutesSpan = clock.querySelector('.minutes');
//  var secondsSpan = clock.querySelector('.seconds');
//
//  function updateClock() {
//    var t = getTimeRemaining(endtime);
//
//    daysSpan.innerHTML = t.days;
//    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
//
//    if (t.total <= 0) {
//      clearInterval(timeinterval);
//    }
//  }
//
//  updateClock();
//  var timeinterval = setInterval(updateClock, 1000);
//}
//
//var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
//initializeClock('clockdiv', deadline);
var target_date = new Date().getTime() + (1000*3600*48); // set the countdown date
var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;

	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}

