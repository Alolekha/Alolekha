// JavaScript for interactive functionality

// Handle book open button click
document.querySelectorAll('.open-btn').forEach(button => {
button.addEventListener('click', function() {
alert('Book is now opening!');
// You can replace this alert with logic to show the book content
});
});

// Handle download button click
document.querySelector('.download-btn').addEventListener('click', function() {
alert('Download is starting!');
// Add actual download functionality here
});

// Handle share button click
document.querySelector('.share-btn').addEventListener('click', function() {
alert('Sharing the book...');
// Add social media share functionality here
});