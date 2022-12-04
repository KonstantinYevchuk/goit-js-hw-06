const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listOfEl = document.querySelector('#ingredients')
const array = [];
ingredients.forEach(ingredient => {
  const itemOfEl = document.createElement('li')
  itemOfEl.classList.add('item')
  itemOfEl.textContent = ingredient;
  array.push(itemOfEl)
})
listOfEl.append(...array)

console.log(listOfEl)