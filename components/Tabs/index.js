// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
let topic = document.querySelector('.topics')
function getInfo(){
    axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(res=>{res.data.topics.forEach(item=>{topic.appendChild(createTab(item))})
    })
}
//  Each tab should look like this:
//    <div class="tab">topic here</div>
function createTab(item){
    let tabDiv = document.createElement('div')
    tabDiv.classList.add('tab')
    tabDiv.textContent = item;
    
    return tabDiv;
    
}
getInfo()