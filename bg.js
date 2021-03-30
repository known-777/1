const body=document.querySelector("body");

const IMG_NUMBER =3;

function paintImage(imgNuber) {
  const image = new Image();
  image.src=`images/${imgNuber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number= Math.floor(Math.random()*3);
  return number;
}
function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}
init();
