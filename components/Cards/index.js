// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
let articleSec = document.querySelector('.cards-container')
function getCard(){
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res=>{
        console.log(res)
        let obj = res.data.articles
        obj.javascript.forEach(item => articleSec.appendChild(CreateCard(item)))
        obj.bootstrap.forEach(item => articleSec.appendChild(CreateCard(item)))
        obj.technology.forEach(item => articleSec.appendChild(CreateCard(item)))
        obj.jquery.forEach(item => articleSec.appendChild(CreateCard(item)))
        obj.node.forEach(item => articleSec.appendChild(CreateCard(item)))

    })
}
// Write a function that returns the following markup:
function CreateCard(obj){
    let card = document.createElement('div')
    let headline = document.createElement('div')
    let author = document.createElement('div')
    let imgContainer = document.createElement('div')
    let image = document.createElement('img')
    let name = document.createElement('span')

    // Content & Classes
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')


    headline.textContent = obj.headline
    image.src = obj.authorPhoto
    image.alt = 'Photo of the author'
    name.textContent =`By ${obj.authorName}`

    // structure
    imgContainer.appendChild(image)
    author.appendChild(imgContainer)
    author.appendChild(name)
    card.appendChild(headline)
    card.appendChild(author)

    

    return card


}
getCard();
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
