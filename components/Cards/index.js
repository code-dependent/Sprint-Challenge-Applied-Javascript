
let articleSection = document.querySelector('.cards-container')

function getCard(){
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res=>{
        console.log(res)
        let catagories = Object.keys(res.data.articles)
        console.log(catagories)
        catagories.forEach(catagory => {
            let articleData = res.data.articles[`${catagory}`];
            return articleData.forEach(articleObject=>articleSection.appendChild(CreateCard(articleObject)))
        })
    })
}


function CreateCard(obj){
    let cardParent = document.createElement('div')
    let headline = document.createElement('div')
    let author = document.createElement('div')
    let imgContainer = document.createElement('div')
    let image = document.createElement('img')
    let name = document.createElement('span')

    // Content & Classes
    cardParent.classList.add('card')
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
    cardParent.appendChild(headline)
    cardParent.appendChild(author)

    

    return cardParent


}
getCard();
