const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
const headEl = document.querySelector("head")
console.log(headEl)
const result = `<style> #text {font-size: 60px; } </style>`
    headEl.append("beforeend", result)

inputEl.addEventListener("input", (event) => {
    
    
    // console.log(event.currentTarget.value)
    // textEl.setAttribute("style", "font-size: 0")
    // console.log(textEl.style.fontSize) 
    // textEl.style.fontSize = event.currentTarget.value; 
})