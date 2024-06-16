function showSection(event, sectionId) {
    event.preventDefault();
    
    // Remove 'active' class from all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Check if the Home section is clicked
    if (sectionId === 'home') {
        // Show the Featured Products section
        document.getElementById('featured-products').style.display = 'block';
    } else {
        // Hide the Featured Products section
        document.getElementById('featured-products').style.display = 'none';
    }

    // Add 'active' class to the clicked section
    document.getElementById(sectionId).classList.add('active');
}


// Initial setup to show the featured products
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('featured-products').classList.add('active');
});

