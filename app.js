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

for (let i = 0; i < 100; i++) {
  const newImg = document.createElement("img");
  newImg.src = "/pics/" + getRandomDogImage();
  gallery.appendChild(newImg);
}