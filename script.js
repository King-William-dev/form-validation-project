<<<<<<< HEAD
const form = document.getElementById('myForm');

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let isUsernameValid = false;
  let isEmailValid = false;
  let isPasswordValid = false;

  // Username
  if (username.value.trim() === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
    isUsernameValid = true;
  }

  // Email
  if (email.value.trim() === '') {
    showError(email, 'Email is required');
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Enter a valid email');
  } else {
    showSuccess(email);
    isEmailValid = true;
  }

  // Password
  if (password.value.trim() === '') {
    showError(password, 'Password is required');
  } else if (!isStrongPassword(password.value)) {
    showError(password, 'Min 8 chars, 1 uppercase, 1 number');
  } else {
    showSuccess(password);
    isPasswordValid = true;
  }

  // Final check
  if (isUsernameValid && isEmailValid && isPasswordValid) {
    alert('Form submitted successfully!');
    form.reset();
  }
});

function showError(input, message) {
  const inputGroup = input.parentElement;
  const error = inputGroup.querySelector('.error');

  inputGroup.classList.remove('success');
  inputGroup.classList.add('error');

  error.innerText = message;
}

function showSuccess(input) {
  const inputGroup = input.parentElement;
  const error = inputGroup.querySelector('.error');

  inputGroup.classList.remove('error');
  inputGroup.classList.add('success');

  error.innerText = '';
}

function isValidEmail(email) {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  return emailPattern.test(email);
}

function isStrongPassword(password) {
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordPattern.test(password);
}

username.addEventListener('input', function () {
  if (username.value.trim() === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }
});

email.addEventListener('input', function () {
  if (email.value.trim() === '') {
    showError(email, 'Email is required');
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Enter a valid email');
  } else {
    showSuccess(email);
  }
});

password.addEventListener('input', function () {
  if (password.value.trim() === '') {
    showError(password, 'Password is required');
  } else if (!isStrongPassword(password.value)) {
    showError(password, 'Min 8 chars, 1 uppercase, 1 number');
  } else {
    showSuccess(password);
  }
});
=======
const form = document.getElementById('myForm');

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let isUsernameValid = false;
  let isEmailValid = false;
  let isPasswordValid = false;

  // Username
  if (username.value.trim() === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
    isUsernameValid = true;
  }

  // Email
  if (email.value.trim() === '') {
    showError(email, 'Email is required');
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Enter a valid email');
  } else {
    showSuccess(email);
    isEmailValid = true;
  }

  // Password
  if (password.value.trim() === '') {
    showError(password, 'Password is required');
  } else if (!isStrongPassword(password.value)) {
    showError(password, 'Min 8 chars, 1 uppercase, 1 number');
  } else {
    showSuccess(password);
    isPasswordValid = true;
  }

  // Final check
  if (isUsernameValid && isEmailValid && isPasswordValid) {
    alert('Form submitted successfully!');
    form.reset();
  }
});

function showError(input, message) {
  const inputGroup = input.parentElement;
  const error = inputGroup.querySelector('.error');

  inputGroup.classList.remove('success');
  inputGroup.classList.add('error');

  error.innerText = message;
}

function showSuccess(input) {
  const inputGroup = input.parentElement;
  const error = inputGroup.querySelector('.error');

  inputGroup.classList.remove('error');
  inputGroup.classList.add('success');

  error.innerText = '';
}

function isValidEmail(email) {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  return emailPattern.test(email);
}

function isStrongPassword(password) {
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordPattern.test(password);
}

username.addEventListener('input', function () {
  if (username.value.trim() === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }
});

email.addEventListener('input', function () {
  if (email.value.trim() === '') {
    showError(email, 'Email is required');
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Enter a valid email');
  } else {
    showSuccess(email);
  }
});

password.addEventListener('input', function () {
  if (password.value.trim() === '') {
    showError(password, 'Password is required');
  } else if (!isStrongPassword(password.value)) {
    showError(password, 'Min 8 chars, 1 uppercase, 1 number');
  } else {
    showSuccess(password);
  }
});
>>>>>>> 88a3eae655b23365eac7b5a31ef897fd4aa41018
