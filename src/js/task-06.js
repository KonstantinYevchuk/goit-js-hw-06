const inputEl = document.querySelector('#validation-input');
console.log(inputEl)

const removeFocus = () => {
    inputEl.classList.remove('invalid', 'valid')
    if (inputEl.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid')
    } else {
        inputEl.classList.add("invalid")
    }
}
inputEl.addEventListener("blur", removeFocus) 

