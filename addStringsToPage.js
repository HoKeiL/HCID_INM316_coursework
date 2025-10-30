//fetch the json file
fetch("strings.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach(addStringToPage);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// add string-content to page
function addStringToPage(string) {
  // create a new element for each string
  const stringElement = document.createElement("div");
  stringElement.classList.add(string.class);

  // add the string image
  const stringImage = document.createElement("img");
  stringImage.classList.add("string-image");
  stringImage.src = string.image;
  stringImage.alt = "The packaging of " + string.name;
  stringElement.appendChild(stringImage);

  // add the string name
  const stringName = document.createElement("h3");
  stringName.classList.add("string-name");
  stringName.textContent = string.name;
  stringElement.appendChild(stringName);

  // add other string details
  const stringBrand = document.createElement("p");
  stringBrand.classList.add("string-brand");
  stringBrand.textContent = "Brand: " + string.brand;
  stringElement.appendChild(stringBrand);

  const stringThickness = document.createElement("p");
  stringThickness.classList.add("string-thickness");
  stringThickness.textContent = "Thickness: " + string.thickness;
  stringElement.appendChild(stringThickness);

  const stringDescrption = document.createElement("p");
  stringDescrption.classList.add("string-description");
  stringDescrption.textContent = string.description;
  stringElement.appendChild(stringDescrption);

  // add the string to the page
  if (string.class === "durableString") {
    const stringListElement = document.querySelector(".durableStrings");
    stringListElement.appendChild(stringElement);
  } else if (string.class === "performanceString") {
    const stringListElement = document.querySelector(".performanceStrings");
    stringListElement.appendChild(stringElement);
  } else {
    const stringListElement = document.querySelector(".eliteStrings");
    stringListElement.appendChild(stringElement);
  }
}
