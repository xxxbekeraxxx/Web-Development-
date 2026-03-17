function checkAge() {
  let age = document.getElementById("age").value;
  let msg = document.getElementById("message");

  if (age < 18) {
    msg.textContent = "You cant get access to the course, because your age under 18";
  } else {
    msg.textContent = "Welcome"
  }
}
