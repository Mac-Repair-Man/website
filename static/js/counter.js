// Get the current date and time
const now = new Date();
let count = 0;

// Select the counter element
const counterElement = document.getElementById('counter-daily');

// Update the counter every hour
setInterval(() => {
    // Check if the current time is a new hour
    if (new Date().getHours() !== now.getHours()) {
        // Increment the counter
        count++;

        // Update the counter element with the new count
        counterElement.textContent = count;

        // Update the now variable to the current hour
        now.setHours(new Date().getHours());
    }
}, 1000 * 60 * 60); // Run the code every hour (in milliseconds)

