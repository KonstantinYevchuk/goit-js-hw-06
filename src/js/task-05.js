const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
console.log(inputEl)
console.log(outputEl)


inputEl.addEventListener("input", (event) => {
    if (event.currentTarget.value.trim() === "") {
       return outputEl.textContent = "Anonymous" 
    }
    outputEl.textContent = event.currentTarget.value;
} )
