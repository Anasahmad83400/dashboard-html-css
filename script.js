// Sidebar toggle for mobile
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    mainContent.classList.toggle('full');
});

// Form validation and automation
const form = document.getElementById('userForm');
const message = document.getElementById('form-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Simple validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const userMessage = document.getElementById('message').value.trim();

    if (name === '' || email === '' || userMessage === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Display success message
    message.classList.add('show');

    // Reset form automatically
    form.reset();

    // Hide message after 3 seconds
    setTimeout(() => {
        message.classList.remove('show');
    }, 3000);
});
