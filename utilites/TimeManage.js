// cmplteBtn.js
document.addEventListener('DOMContentLoaded', function() {
    function updateTime() {
        let now = new Date();
        let dateElements = document.querySelectorAll('#dateTime');
        for (let i = 0; i < dateElements.length; i++) {
            dateElements[i].textContent = now.toLocaleString();
        }
    }

 

    document.getElementById('clearHist').addEventListener('click', function() {
        let activityLog = document.querySelector('.activity-log');
        activityLog.innerHTML = '';
    });

    updateTime();
    setInterval(updateTime, 1000);
});