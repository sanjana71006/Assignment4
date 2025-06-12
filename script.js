document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Simple email validation using regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    message.style.color = "red";
    message.textContent = "Please enter a valid email address.";
    return;
  }

  if (password.length === 0) {
    message.style.color = "red";
    message.textContent = "Password cannot be empty.";
    return;
  }

  // If both validations pass
  message.style.color = "green";
  message.textContent = "Login successful!";
});
