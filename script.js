document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const errorMessage = document.getElementById('error-message');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Reset messages
    errorMessage.textContent = '';
    successMessage.textContent = '';

    // Validation
    if (!name || !email || !message) {
      errorMessage.textContent = 'All fields are required.';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errorMessage.textContent = 'Please enter a valid email address.';
      return;
    }

    // Show success and clear form
    successMessage.textContent = 'Message sent successfully!';
    form.reset();
  });
});
