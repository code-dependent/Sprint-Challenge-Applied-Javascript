
let carouselContainer = document.querySelector('div.carousel-container')

// function getURL(){
//   axios.get('https://lambda-times-backend.herokuapp.com/articles')
//   .then(res=>{
//     let catagories = Object.keys(res.data.articles)
//     let testar = []
//     console.log(catagories)

//     catagories.forEach(catagory=>{res.data.articles[`${catagory}`].forEach(item=>testar.push(item.authorPhoto))})
//     testar = [... new Set(testar)]
//     console.log(testar)
//     return carouselContainer.appendChild(carousel(testar))
//   })
// }
function carousel(){
  const imgUrls = ["./assets/carousel/mountains.jpeg",
                "./assets/carousel/computer.jpeg",
                "./assets/carousel/trees.jpeg",
                "./assets/carousel/turntable.jpeg"]


  const carousel = document.createElement('div')
  carousel.classList.add('carousel')
  const buttonL = document.createElement('div')
  buttonL.classList.add('left-button')
  buttonL.textContent = '<'
  const buttonR = document.createElement('div')
  buttonR.classList.add('right-button')
  buttonR.textContent = '>'
  carousel.appendChild(buttonL)
  const img = document.createElement('img')
  carousel.appendChild(img)

  let track = 0
  img.src = imgUrls[track]
  
  buttonR.addEventListener('click', () =>{
    if(track === imgUrls.length -1){
      track = 0
    }else{
      track++
    }
    return img.src = imgUrls[track]
  })

  buttonL.addEventListener('click', () =>{
    if(track === 0){
      track = imgUrls.length -1
    }else{
      track--
    }
    img.src = imgUrls[track]
  })

    carousel.appendChild(buttonR)
    return carousel
}
carouselContainer.appendChild(carousel())


