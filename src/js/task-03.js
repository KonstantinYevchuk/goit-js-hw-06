const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const listGallery = document.querySelector('.gallery')
// listGallery.style.listStyle = 'none';
const imagesEl = images
.map(({url, alt}) => `<li class="list_item">
<img src="${url}", alt= "${alt}", width = "320", height= "200"/>
</li>`)
.join("");
listGallery.insertAdjacentHTML("afterbegin", imagesEl)
console.log(imagesEl)

const styles = `<style> .gallery { 
  display: flex; 
  justify-content: space-around; 
  align-items: center; 
  list-style: none } </style>`;
const bodyEl = document.querySelector("body");
bodyEl.insertAdjacentHTML("beforeend", styles)
