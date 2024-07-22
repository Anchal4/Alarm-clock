

// Get DOM elements
let time_html = document.getElementById('time_html');
let hour = document.getElementById('hour');
let min = document.getElementById('min');
let alarmList = document.getElementById('alarmList');
let alarmSound = document.getElementById('alarmSound');

// Array to store alarm times
let alarms = [];

// Update current time every second
setInterval(() => {
    let currTime = new Date();
    time_html.innerHTML = currTime.toLocaleTimeString();
    checkAlarms();
}, 1000);

// Set alarm time and display it
function setAlarm() {
    let h = hour.value.padStart(2, '0');
    let m = min.value.padStart(2, '0');
    let alarmTime = `${h}:${m}:00`;
    alarms.push(alarmTime);
    displayAlarms();
    hour.value = '';
    min.value = '';
}

// Display the list of alarms
function displayAlarms() {
    alarmList.innerHTML = '';
    alarms.forEach((alarm, index) => {
        let li = document.createElement('li');
        li.innerHTML = `${alarm} <button onclick="removeAlarm(${index})">Remove</button>`;
        alarmList.appendChild(li);
    });
}

// Remove an alarm
function removeAlarm(index) {
    alarms.splice(index, 1);
    displayAlarms();
}

// Check if any alarm matches the current time
function checkAlarms() {
    let currTime = new Date();
    let currHour = currTime.getHours().toString().padStart(2, '0');
    let currMin = currTime.getMinutes().toString().padStart(2, '0');
    let currSec = currTime.getSeconds().toString().padStart(2, '0');
    let currFormattedTime = `${currHour}:${currMin}:${currSec}`;

    if (alarms.includes(currFormattedTime)) {
        alarmSound.play();
    }
}
