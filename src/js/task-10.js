function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const controlsEl = document.querySelector("#controls input");
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxEl = document.querySelector("#boxes");

const handleInput = evt => {
  console.log(evt.currentTarget.value)
  
}
controlsEl.addEventListener("input", handleInput);

const handleClick = (event) => {
  console.log(event.currentTarget.value)
}
btnCreate.addEventListener("click", handleClick);
btnDestroy.removeEventListener("click", handleClick);




// function createBoxes(amount) {
//   const box = document.createElement("div");
//   box.width = "30px";
//   box.height = "30px";
//   boxEl.append("box")
// }

