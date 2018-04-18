const countdown = document.querySelector('.countdown');

function comingSoon() {

    var hbd = document.getElementById('hbd').value;

    if (hbd.length == 0) {
        alert("Please enter your birthday");
    } else {
        // Set Launch Date
        const launchDate = new Date(hbd + ' 1:00:00').getTime();

        // Update every second
        const interval = setInterval(() => {
            // Get today's Date and time in (ms)
            const nowDate = new Date().getTime();

            // Distance from now to launch date
            const distance = launchDate - nowDate;

            // Time Calculations
            const days = Math.floor(distance / (1000 * 60 * 60 * 24)); // Get Days
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor(distance % ((1000 * 60)) / 1000);

            // Display results
            countdown.innerHTML = `
            <div>${days}<span>Days</span></div>
            <div>${hours}<span>Hours</span></div>
            <div>${mins}<span>Minutes</span></div>
            <div>${seconds}<span>Seconds</span></div>`;

            // If launch date passed
            if (distance < 0) {
                // Stop countdown
                clearInterval(interval);
                // Style and output text
                countdown.style.color = '#17a2b8';
                countdown.innerHTML = 'Happy Birthday';
            }

            if (distance < -86400000) {
                // Stop countdown
                clearInterval(interval);
                // Style and output text
                countdown.style.color = '#17a2b8';
                countdown.innerHTML = 'Happy Belated Birthday';
            }

        }, 1000);
    }
}

function reloadPage() {
    location.reload();
}