const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#name");
const nameMsg = document.querySelector(".name-msg");
const email = document.querySelector("#email");
const emailMsg = document.querySelector(".email-msg");
const textArea = document.querySelector("#message");
const textMsg = document.querySelector(".details-msg");
const button = document.querySelector("button");
const success = document.querySelector(".success");

function formValidation(event) {
  event.preventDefault();
  console.log(event);

  if (checkAmount(fullName.value, 10)) {
    nameMsg.style.display = "none";
  } else {
    nameMsg.style.display = "block";
  }
  if (validateEmail(email.value)) {
    emailMsg.style.display = "none";
  } else {
    emailMsg.style.display = "block";
  }
  if (checkAmount(textArea.value, 20)) {
    textMsg.style.display = "none";
  } else {
    textMsg.style.display = "block";
  }
  if (
    checkAmount(fullName.value, 10) &&
    checkAmount(textArea.value, 20) &&
    validateEmail(email.value)
  ) {
    success.style.display = "block";
  }
}

form.addEventListener("submit", formValidation);

function checkAmount(value, amount) {
  if (value.trim().length >= amount) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
