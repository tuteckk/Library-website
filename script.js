// 1. SEARCH FUNCTIONALITY LOGIC

function filterBooks() {
    // Get the search term and convert it to lower case for case-insensitive matching
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    // Get all the book cards (the containers for each book)
    const bookCards = document.querySelectorAll('.book-card');

    bookCards.forEach(card => {
        // Get the title and author text from inside the card
        const title = card.querySelector('h3').textContent.toLowerCase();
        const author = card.querySelector('p').textContent.toLowerCase();
        
        // Check if the search term is found in either the title or the author
        // The includes() method is perfect for partial matching
        if (title.includes(searchTerm) || author.includes(searchTerm)) {
            // If there's a match, display the book card
            card.style.display = 'block'; 
        } else {
            // If no match, hide the book card
            card.style.display = 'none';
        }
    });
}

// Attach the function to the search button and the input field for instant searching

// 1. Get the button element
const searchButton = document.getElementById('search-btn');
// Add an event listener for when the button is clicked
searchButton.addEventListener('click', filterBooks);

// 2. Get the input field
const searchInput = document.getElementById('search-input');
// Add an event listener for when the user types (key up event)
searchInput.addEventListener('keyup', filterBooks);


// ===================================
// 2. UPDATED CTA BUTTON LOGIC
// (Navigates to the book list page on click)
// ===================================

function handleCtaClick() {
    // UPDATED: Now navigates to the browse page instead of scrolling
    window.location.href = 'browse.html';
    console.log("User started browsing!");
}

const ctaButton = document.getElementById('cta-button');
ctaButton.addEventListener('click', handleCtaClick);

// Existing 'Read Now' button alert
document.querySelectorAll('.read-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert("You clicked 'Read Now'! (This would open the book viewer)");
    });
});
