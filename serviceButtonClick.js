// add a listener to buttons
const serviceButtonElements = document.querySelectorAll(".service-button");
serviceButtonElements.forEach(addServiceButtonListener);

function addServiceButtonListener(serviceButtonElement) {
  serviceButtonElement.addEventListener("click", serviceButtonClick);
}

function serviceButtonClick(event) {
  const clickedButton = event.currentTarget;

  // generate the class of the selected service's details element
  // for example: ".service-details-Strings" or ".service-details-Stencils"
  const detailsElementCssSelector =
    ".service-details-" + clickedButton.textContent;

  // find this element
  const detailsElement = document.querySelector(detailsElementCssSelector);
  // remove selected state from all buttons
  serviceButtonElements.forEach(updateClickedButtonState);

  // remove selected state from all details elements
  const serviceDetailElements = document.querySelectorAll(".service-details");
  serviceDetailElements.forEach(updateServiceDetailState);

  // add selected state just to the clicked button
  detailsElement.classList.add("currently-selected-service");
  clickedButton.classList.add("currently-selected-button");
}

function updateClickedButtonState(serviceButtonElement) {
  serviceButtonElement.classList.remove("currently-selected-button");
}

function updateServiceDetailState(serviceDetailElement) {
  serviceDetailElement.classList.remove("currently-selected-service");
}
