const form = document.querySelector('form');
const passwordInput = document.querySelector('input[type="password"]');
const confirmPasswordInput = document.querySelector('#confirm-password');
const error = document.querySelector('.error');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Check if password and confirm password match
  if (passwordInput.value !== confirmPasswordInput.value) {
    error.textContent = 'Passwords do not match';
  } else {
    error.textContent = '';

    // TODO: Send password reset request to server
    alert('Password reset successful!');
  }
});
