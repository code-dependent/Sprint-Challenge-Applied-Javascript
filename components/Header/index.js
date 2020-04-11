// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    let parentDiv = document.createElement('div')
    let date = document.createElement('span')
    let times = document.createElement('h1')
    let temp = document.createElement('span')


    parentDiv.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')


    date.textContent ='SMARCH 28, 2019'
    times.textContent ='Lambda Times'
    temp.textContent ='98'

    parentDiv.appendChild(date)
    parentDiv.appendChild(times)
    parentDiv.appendChild(temp)


    return parentDiv

}
let header = document.querySelector('div.header-container')
header.appendChild(Header())