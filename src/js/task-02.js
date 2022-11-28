const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listOfEl = document.querySelector('#ingredients')

ingredients.forEach(ingredient => {
  const itemOfEl = document.createElement('li')
  itemOfEl.classList.add('item')
  itemOfEl.textContent = ingredient;
  listOfEl.append(itemOfEl)
})

console.log(listOfEl)