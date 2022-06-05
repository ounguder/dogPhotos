const dogSelector = document.getElementById("dogSelector");
const myImage = document.getElementById("myImage");
const myButton = document.getElementById("myBtn");
const dropDownContent = document.querySelector(".dropdown-content");

function optionCreator(msg, optionContainer) {
  for (let item in msg) {
    const option = document.createElement("option");
    option.setAttribute("class", "selectOption");
    option.value = item;
    option.innerText = item[0].toUpperCase() + item.slice(1);
    optionContainer.append(option);
  }
}

const request = fetch("https://dog.ceo/api/breeds/list/all").then(
  (response) => {
    const dataPromise = response.json();
    dataPromise.then((data) => {
      const dogBreeds = data.message;
      optionCreator(dogBreeds, dogSelector);
    });
  }
);

// myButton.addEventListener("click", (evt) => {
  const dogType = dogSelector.selectedOptions[0].value;
  const imgRequest = fetch(
    `https://dog.ceo/api/breed/${dogType}/images/random`
  ).then((response) => {
    const dataPromise = response.json();
    dataPromise.then((data) => {
      myImage.setAttribute("src", `${data.message}`);
    });
  });
// });
