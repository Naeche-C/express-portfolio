// form.js
// Client-side validation for the Contact form

document.addEventListener('DOMContentLoaded', () => {
  // Select the form element once the page is loaded
  const form = document.querySelector('form');

  // Add submit event listener
  form.addEventListener('submit', (event) => {
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    // Basic empty-field check
    if (!name || !email || !message) {
      alert('⚠️ Please fill in all fields before submitting.');
      event.preventDefault(); // Prevents form from submitting
      return;
    }

    // Email format validation
    if (!email.includes('@') || !email.includes('.')) {
      alert('⚠️ Please enter a valid email address.');
      event.preventDefault();
      return;
    }

    // If all checks pass
    alert('✅ Message sent successfully (form validation passed).');
  });
});
