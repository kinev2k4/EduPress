// Local Storage Registration
document.getElementById("register-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("register-email").value;
    let username = document.getElementById("register-username").value;
    let password = document.getElementById("register-password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    // Store user data in localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("username", username);
    localStorage.setItem("userPassword", password);
  
    alert("Account Registered Successfully!");
    document.getElementById("register-overlay").classList.add("hidden");
  });
  
  // Local Storage Login
  document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;
  
    // Retrieve user data from localStorage
    if (email === localStorage.getItem("userEmail") && password === localStorage.getItem("userPassword")) {
      alert("Login Successful!");
      window.location.href = "HomePage.html";
    } else {
      alert("Invalid credentials!");
    }
  });
  
  // Show/Hide Register Form Overlay
  document.querySelector(".register-account").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("register-overlay").classList.remove("hidden");
  });
  
  document.getElementById("close-register").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("register-overlay").classList.add("hidden");
  });
  
  // Show/Hide Password Reset Modal
  document.querySelector(".lost-password").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("password-reset-modal").classList.remove("hidden");
  });
  
  document.getElementById("close-reset").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("password-reset-modal").classList.add("hidden");
  });
  
  // Password Reset (Simulated)
  document.getElementById("reset-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("reset-email").value;
  
    if (email === localStorage.getItem("userEmail")) {
      let resetCode = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit code
      alert("A reset code has been sent to your email: " + resetCode);
      localStorage.setItem("resetCode", resetCode);
    } else {
      alert("Email not found!");
    }
  });