// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
const btnEl = document.querySelector('.change-color');
const textEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const handleClick = (evt) => {
  console.log(evt.currentTarget.value)
  const randomColor = bodyEl.style.backgroundColor = getRandomHexColor() 
  textEl.textContent = randomColor
}

btnEl.addEventListener("click", handleClick)

