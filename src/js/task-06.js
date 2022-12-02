const inputEl = document.querySelector('#validation-input');
console.log(inputEl)

const removeFocus = () => {
    if (inputEl.value.length <= inputEl.dataset.length) {
        inputEl.classList.add('invalid')
    } else {
        inputEl.classList.remove('invalid')
        inputEl.classList.add("valid")
    }
}
inputEl.addEventListener("blur", removeFocus) 

