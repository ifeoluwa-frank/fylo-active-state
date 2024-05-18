// SECTION 1 EMAIL VALIDATION

let emailField = document.getElementById("form-input");
let emailError = document.getElementById("email-error");

function validateEmail() {
  if (emailField.value === "") {
    emailError.textContent = "";
  } else if (
    !emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    emailError.innerHTML = "Please check your email";
    emailField.style.borderColor = "red";
    return false;
  }
  emailError.innerHTML = "";
  emailField.style.borderColor = "";
  return true;
}

// FOOTER EMAIL VALIDATION
let section3EmailField = document.querySelector(".section-3-input");
let errorMsg = document.querySelector("#email-error-section-3");

function validateEmailSectionThree() {
  if (section3EmailField.value === "") {
    errorMsg.textContent = "";
  } else if (
    !section3EmailField.value.match(
      /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
    )
  ) {
    errorMsg.innerHTML = "Please check your email";
    section3EmailField.style.borderColor = "red";
    return false;
  }

  errorMsg.innerHTML = "";
  section3EmailField.style.borderColor = "";
  return true;
}
