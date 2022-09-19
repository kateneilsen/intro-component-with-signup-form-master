const form = document.getElementById("form");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
};

const emailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === "") {
    setError(firstName, "First Name cannot be empty");
  }
  if (lastNameValue === "") {
    setError(lastName, "Last Name cannot be empty");
  }
  if (emailValue === "") {
    setError(email, "Email cannot be empty");
  } else {
    if (!emailIsValid(emailValue)) {
      setError(email, "Looks like this is not an email");
    }
  }
  if (passwordValue === "") {
    setError(password, "Password cannot be empty");
  }
};
