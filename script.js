// 1. SEARCH FUNCTIONALITY LOGIC

function filterBooks() {
    // Get the search term and convert it to lower case for case-insensitive matching
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    // Get all the book cards (the containers for each book)
    const bookCards = document.querySelectorAll('.book-card');

    bookCards.forEach(card => {
        // Get the title, author, and genre/year text from inside the card
        const title = card.querySelector('h3').textContent.toLowerCase();
        const author = card.querySelector('p:nth-child(2)').textContent.toLowerCase();
        const details = card.querySelector('p:nth-child(3)').textContent.toLowerCase();
        
        // Check if the search term is found in the title, author, or details
        if (title.includes(searchTerm) || author.includes(searchTerm) || details.includes(searchTerm)) {
            // If there's a match, display the book card
            card.style.display = 'block'; 
        } else {
            // If no match, hide the book card
            card.style.display = 'none';
        }
    });
}

// Attach the function to the search button and the input field for instant searching
const searchButton = document.getElementById('search-btn');
searchButton.addEventListener('click', filterBooks);

const searchInput = document.getElementById('search-input');
searchInput.addEventListener('keyup', filterBooks);



// 2. READ NOW BUTTON LOGIC (Browse Page)


const bookViewer = document.getElementById('book-viewer');
const viewerCloseBtn = document.getElementById('viewer-close-btn');

// Attach listener to all 'Read Now' buttons
document.querySelectorAll('.read-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        // Find the closest parent book-card element
        const card = event.target.closest('.book-card');
        if (!card) return;

        // Extract book details from the card elements
        const title = card.querySelector('h3').textContent;
        const author = card.querySelector('p:nth-child(2)').textContent.replace('Author: ', '');
        const detailsText = card.querySelector('p:nth-child(3)').textContent;
        
        // Separate Genre and Year from the details text
        const [genre, year] = detailsText.split(' | ');
        
        // The description is in the hidden div with class 'book-description'
        const description = card.querySelector('.book-description').textContent;

        // Update the book viewer section with details
        document.getElementById('viewer-title').textContent = title;
        document.getElementById('viewer-author').textContent = author;
        document.getElementById('viewer-genre').textContent = genre.replace('Genre: ', '');
        document.getElementById('viewer-year').textContent = year.replace('Year: ', '');
        document.getElementById('viewer-description').textContent = description;

        // Show the viewer and scroll to it
        bookViewer.style.display = 'block';
        bookViewer.scrollIntoView({ behavior: 'smooth' });
    });
});

// Listener for the new 'Close Book' button
if (viewerCloseBtn) {
    viewerCloseBtn.addEventListener('click', () => {
        bookViewer.style.display = 'none';
    });
}
