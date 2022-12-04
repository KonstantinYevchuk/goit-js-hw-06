const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
const bodyEl = document.querySelector("body")

textEl.style.fontSize = "50px"
inputEl.addEventListener("input", (event) => { 
    textEl.style.fontSize = event.currentTarget.value + "px";
     
})

