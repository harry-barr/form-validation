const nameError = document.querySelector("#name-error");
const phoneError = document.querySelector("#phone-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");
const submitError = document.querySelector("#submit-error");

const validateName = () => {
  const name = document.querySelector("#contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
};

const validatePhone = () => {
  const phone = document.querySelector("#contact-phone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone no is required";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "Phone no should be 10 digits";
    return false;
  }
  if (!phone.match(/^[0-9]{10}/)) {
    phoneError.innerHTML = "Only digits";
    return false;
  }
  phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
};

const validateEmail = () => {
  const email = document.querySelector("#contact-email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.innerHTML = "Invalid email";
    return false;
  }
  emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
};

const validateMessage = () => {
  const message = document.querySelector("#contact-message").value;
  const required = 30;
  let left = required - message.length;
  if (left > 0) {
    messageError.innerHTML = left + " more characters required";
    return false;
  }
  messageError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
};

const validateForm = () => {
  if (
    !validateName() ||
    !validateEmail() ||
    !validatePhone() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix errors to submit";
    setTimeout(() => {
      submitError.style.display = "none";
    }, 3_000);
    return false;
  }
};
