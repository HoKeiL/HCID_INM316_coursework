const submitFormElements = document.querySelector(".submit-form");

submitFormElements.addEventListener("click", submitFormButtonClick);

// when a button is clicked, it checks if the submitted form is valid. If valid, a message appear confirming form submission.

function submitFormButtonClick(event) {
  const form = event.target.closest("form");

  if (!form.checkValidity()) {
    // Let the browser show validation errors
    form.reportValidity();
    return;
  }

  event.preventDefault();
  const clickedButton = event.currentTarget;
  alert(
    "Thank you for contacting KWBadminton, we will get in touch with you asap to confirm your chosen service :)"
  );
}
