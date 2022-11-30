const counterValue = document.querySelector('#value');
console.log(counterValue);

const counter = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
    increment() {
        this.value += 1;
    }
}
const handleClickDecrement = () => {
    counter.decrement();
    counterValue.textContent = counter.value;
}
const handleClickIncrement = () => {
    counter.increment();
    counterValue.textContent = counter.value;
}


const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');


decrementBtn.addEventListener("click", handleClickDecrement);
incrementBtn.addEventListener("click", handleClickIncrement);

// let total = 0;
// const handleClickDecrement = () => {
    
//     if (total -= 1) {
//        counterValue.textContent = total; 
//     } else {
//     counterValue.textContent = 0 }
//     console.log(total)
// }
// const handleClickIncrement = () => {
//     if (total += 1) {
//         counterValue.textContent = total
//     } else {
//     counterValue.textContent = 0 }
//     console.log(total)
// }
