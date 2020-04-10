/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
let carouselContainer = document.querySelector('.carousel-container')
function getURL(){
  axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(res=>{
    let testar = res.data.articles.javascript.forEach(item=testar.push(item.authorPhoto))
    console.log(testar)
    carouselContainer.appendChild(carousel(testar))
  })
}
function carousel(array){
  let carousel = document.createElement('div')
  carousel.classList.add('carousel')
  let buttonL = document.createElement('div')
  buttonL.classList.add('left-button')
  buttonL.textContent = '<'
  let buttonR = document.createElement('div')
  buttonR.classList.add('right-button')
  buttonR.textContent = '>'
  carousel.appendChild(buttonL)
  array.forEach(url=>{
    let img = document.createElement('img')
    img.src = url
    carousel.appendChild(img)
    })
    carousel.appendChild(buttonR)
}
/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
