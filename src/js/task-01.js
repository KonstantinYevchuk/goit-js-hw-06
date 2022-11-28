const catigoriesOfAnimals = document.querySelector('#categories');
const listOfAnimalsRef = catigoriesOfAnimals.children.length;
console.log(`Numbers of categories: ${listOfAnimalsRef}`);

const itemOfAnimalsRef = document.querySelectorAll('.item > h2');
const firstItemEl = itemOfAnimalsRef[0].textContent;
const secondItemEl = itemOfAnimalsRef[1].textContent;
const thirdItemEl = itemOfAnimalsRef[2].textContent;

const elementsOfItemAnimalsRef = document.querySelectorAll('.item > ul')
const fisrtElAnimals = elementsOfItemAnimalsRef[0].children.length
const secondElAnimals = elementsOfItemAnimalsRef[1].children.length
const thirdElAnimals = elementsOfItemAnimalsRef[2].children.length

console.log(`Category: ${firstItemEl} \n Elements: ${fisrtElAnimals} 
\n Category: ${secondItemEl} \n Elements: ${secondElAnimals}
\n Category: ${thirdItemEl} \n Elements: ${thirdElAnimals}` )

// itemOfAnimalsRef.forEach(item => {
    
//     console.log(`Category: ${item.textContent} \n Elements: ${elementsOfItemAnimalsRef} `)
//  })
 
 













// const itemNamesOfAnimalsRef = [] 
// itemOfAnimalsRef.forEach(item => {
//     console.log(item)
//     itemNamesOfAnimalsRef.push(item.textContent);
//     return itemNamesOfAnimalsRef;
// })
// console.log(itemNamesOfAnimalsRef)
// const elementsOfAnimals = []
// elementsOfItemAnimalsRef.forEach(element => {
//     elementsOfAnimals.push(element.children.length)
//     return elementsOfAnimals
// })
// console.log(elementsOfAnimals)

