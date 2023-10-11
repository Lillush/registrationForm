"use strict";

const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const emailAgainInput = document.querySelector("#emailAgain");
const fromInput = document.querySelector("#from");
const gdprInput = document.querySelector("#gdpr");

const formContainer = document.querySelector(".form__container");
const formMessage = document.querySelector(".form__message");

const nameError = document.querySelector(".error__name");
const mailError = document.querySelector(".error__mail");
const mailAgainError = document.querySelector(".error__mailAgain");
const fromError = document.querySelector(".error__from");
const gdprError = document.querySelector(".error__gdpr");
const errorMsgs = document.querySelectorAll(".error__message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let nameErr = false;
  let mailErr = false;
  let mailAgainErr = false;
  let fromErr = false;
  let gdprErr = false;

  if (nameInput.value === "" || nameInput.value == null) {
    nameError.innerHTML = "Kérem adja meg a nevét!";
    nameErr = true;
  } else {
    nameErr = false;
  }

  if (emailInput.value === "" || emailInput.value == null) {
    mailError.innerHTML = "Kérem, adja meg az E-mail címét!";
    mailErr = true;
  } else {
    mailErr = false;
  }

  if (
    emailAgainInput.value === "" ||
    emailAgainInput.value !== emailInput.value
  ) {
    mailAgainError.innerHTML = "Meg kell egyeznie az E-mail címével!";
    mailAgainErr = true;
  } else {
    mailAgainErr = false;
  }

  if (fromInput.value === "default") {
    fromError.innerHTML = "Kérem válasszon!";
    fromErr = true;
  } else {
    fromErr = false;
  }

  if (gdprInput.checked !== true) {
    gdprError.innerHTML = "Kérem, fogadja el az adatvédelmi tájékoztatót!";
    gdprErr = true;
  } else {
    gdprErr = false;
  }

  if (!nameErr && !mailErr && !mailAgainErr && !fromErr && !gdprErr) {
    successReg();
  }
});

const successReg = () => {
  formContainer.style.display = "none";
  formMessage.style.display = "block";
  errorMsgs.forEach((msg) => (msg.innerHTML = ""));
  setTimeout(() => {
    formContainer.style.display = "block";
    formMessage.style.display = "none";
    nameInput.value = "";
    emailInput.value = "";
    emailAgainInput.value = "";
    fromInput.value = "default";
    gdprInput.checked = false;
  }, 3000);
};
