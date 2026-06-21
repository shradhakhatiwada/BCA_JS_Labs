var form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (email === "" || password === "") {
    alert("Email and password are required fields.");
    event.preventDefault(); // Prevent form submission
  } else if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    event.preventDefault();
  }
});
