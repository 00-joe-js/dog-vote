// console.log(window.APP_DOG_IMAGES);

// const newImgElement = document.createElement("img");
// newImgElement.src = "/pics/" + window.APP_DOG_IMAGES[1781];
// document.body.appendChild(newImgElement);

const getRandomDogImage = () => {
  const howManyDogsIHave = window.APP_DOG_IMAGES.length;
  const randomNumber = Math.floor(Math.random() * howManyDogsIHave);
  return window.APP_DOG_IMAGES[randomNumber];
};

const gallery = document.querySelector("#gallery");

const placeDogInHallOfFame = (imgSrc) => {
  const newImg = document.createElement("img");
  newImg.src = imgSrc;
  gallery.appendChild(newImg);
};

const placeDogsInForVoting = () => {

  // Access left-side and right-side imgs
  const leftSideImg = document.querySelector("#left-side img");
  const rightSideImg = document.querySelector("#right-side img");

  // pick two random dogs
  const randomDogs = [getRandomDogImage(), getRandomDogImage()];

  // create new elements with those dogs as a src
  leftSideImg.src = "/pics/" + randomDogs[0];
  rightSideImg.src = "/pics/" + randomDogs[1];

};

placeDogsInForVoting();

const votingInterface = document.querySelector("#voting-interface");

votingInterface.addEventListener("click", (event) => {

  const elementClickedOn = event.target;

  if (elementClickedOn.tagName === "BUTTON") {
    const imgOfDogNextToThisButton = elementClickedOn.previousElementSibling;
    const imgSrc = imgOfDogNextToThisButton.src;
    placeDogInHallOfFame(imgSrc);
    placeDogsInForVoting();
  }

});

