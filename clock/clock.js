console.log("This is clock.js");

function updateClock() {
    // Get the current Date
    let currentTime = new Date();

    // Extract Hour,Minutes and Seconds from the date

    let currentFullYear = currentTime.getFullYear();
    let currentMonth = currentTime.getMonth();
    let currentDate = currentTime.getDate();
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    // Pad 0 if MInutes or Seconds is less than 10(Single digit)
    currentFullYear = (currentFullYear < 10 ? "0" : "") + currentFullYear;
    currentMonth = (currentMonth < 10 ? "0" : "") + currentMonth;
    currentDate = (currentDate < 10 ? "0" : "") + currentDate;
    currentHours = (currentHours < 10 ? "0" : "") + currentHours;
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    //Convert railway clock to AM/PM Clock
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
    currentHours = (currentHours == 0) ? 12 : currentHours;

    // Choose AM/PM as per the time of the day 
    let timeofDay = (currentHours < 12) ? "AM" : "PM";

    // Prepare the time string from hours,minutes,and seconds
    // let currentTimeStr = currentTime.getMonth() + 1 + ":" + currentTime.getDate() + ":" + currentTime.getFullYear();
    let currentTimeStr = currentDate + ":" + currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeofDay;

    // Insert the time string inside the DOM
    document.getElementById("clock").innerHTML = currentTimeStr;
}