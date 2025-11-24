// Function to handle the button click
function handleCtaClick() {
    // Scroll down to the featured books section
    document.getElementById('featured-books').scrollIntoView({
        behavior: 'smooth'
    });

    // You could also show a message, log, or change content here
    console.log("User started browsing!");
}

// Get the button element by its ID
const ctaButton = document.getElementById('cta-button');

// Add an event listener to run the function when the button is clicked
ctaButton.addEventListener('click', handleCtaClick);

// Example of adding functionality to all 'Read Now' buttons
document.querySelectorAll('.read-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert("You clicked 'Read Now'! (This would open the book viewer)");
    });
});