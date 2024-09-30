// javascript
let form = document.getElementById('playerform')


let player = document.getElementById('player')
let rank = document.getElementById('rank')
let country = document.getElementById('country-select')


let table = document.getElementById('table')
let submitbtn = document.querySelector('.submitbtn')
// let indivrow = document.querySelector('.each-player-row')
//let rowAll = document.querySelectorAll('.each-player-row')
let allClear = document.getElementById('allclear')
let filter = document.querySelectorAll('.filter')

let rankFilter = document.querySelector('.rankfilter')
let nameFilter = document.querySelector('.namefilter')
let countryFilter = document.querySelector('.countryfilter')

let rankArr = []
let playerArr = []
let countryArr = []


function createRowElements (e) {
    e.preventDefault();
    
    let rankval = rank.value
    rankArr.push(rankval)
    console.log(rankval)
    
    let playerval = player.value
    playerArr.push(playerval)
    console.log(playerval)
    
    let countryval = country.value
    
    console.log(rankArr , playerArr , countryArr)
    
    if(playerval === '' || rankval === '' || countryval === ''){
        alert('please fill all fields')
         return
    }
    // create each td elements
    
    let btn = document.createElement('button')
    btn.appendChild(document.createTextNode('peekey'))
    
    let tdPlayer = document.createElement('td')
    tdPlayer.appendChild(document.createTextNode(playerval))
    
    let tdRank = document.createElement('td')
    tdRank.appendChild(document.createTextNode(rankval))
    
    let tdCountry = document.createElement('td')
    tdCountry.appendChild(document.createTextNode(countryval))
    
    let tdDelete = document.createElement('td')
    tdDelete.appendChild(btn)
   
    
   // console.log(tdPlayer.outerHTML)
    // console.log(tdRank.outerHTML)
    // console.log(tdCountry.outerHTML)
    
    // create tr element
    
    let trele = document.createElement('tr')
    trele.classList.add("each-player-row" , 'deftrclass');
    trele.appendChild(tdPlayer)
    trele.appendChild(tdRank)
    trele.appendChild(tdCountry)
    trele.appendChild(tdDelete)
    
    table.appendChild(trele)
    checkUI()
    

    

}


function removeRow(e) {
    
    if (e.target.parentElement.parentElement.classList.contains('each-player-row')){
        e.target.parentElement.parentElement.remove()
        
        //deleteachRow(e)
        
        checkUI()
    }
    
}




function totalClearRows() {
    while(table.secondChild) {
        table.removeChild(table.secondChild)
    }
    
    checkUI()
}


function rankFil(e) {
    let rowAll = document.querySelectorAll('.each-player-row')
    const rankvalueFil = e.target.value
    
    rowAll.forEach(function(row){
        let rankFinal = row.children[1].textContent;
        
        
        if(rankvalueFil === "" ||  rankvalueFil === rankFinal) {
            row.style.display = 'table-row'
        } else {
            row.style.display = 'none'
        }
    })
}


function nameFil(e) {
        let rowAll = document.querySelectorAll('.each-player-row')
        const namevalueFil = e.target.value
        
        rowAll.forEach(function(row){
            let nameFinal = row.firstChild.textContent.toLowerCase()
            
            if(nameFinal.indexOf(namevalueFil) != -1 || namevalueFil === ""){
                row.style.display = 'table-row'
            } else {
                row.style.display = 'none'
            }
        })
}


function countryFil(e){
        let rowAll = document.querySelectorAll('.each-player-row')
        const countryvalueFil = e.target.value
        
        rowAll.forEach(function(row) {
            let countryFinal = row.children[2].textContent.toLowerCase()
            
            if(countryFinal.indexOf(countryvalueFil) != -1 || countryvalueFil === "") {
                row.style.display = 'table-row'
            } else {
                row.style.display = 'none'
            }
        })
}



function checkUI (){
    
    let rowAll = document.querySelectorAll('.deftrclass')
    console.log(rowAll, rowAll.length)
    if(rowAll.length < 2) {
       filter.forEach(function(eachfilter){
           eachfilter.style.display = 'none'
 
       })
        allClear.style.display = 'none'


        
        
       } else {
        filter.forEach(function(eachfilter){
           eachfilter.style.display = 'inline-block'
       })
        //filter.style.display = 'block'
        allClear.style.display = 'inline-block'
        
    }
}

// initialize app, just so that every thing is not there in global scope

function init() {
    submitbtn.addEventListener('click' , createRowElements)
    table.addEventListener('click' , removeRow)
    allClear.addEventListener('click' , totalClearRows)
    rankFilter.addEventListener('input' , rankFil)
    rankFilter.addEventListener("keyup", rankFil)
    nameFilter.addEventListener('input' , nameFil)
    nameFilter.addEventListener('keyup' ,nameFil)
    countryFilter.addEventListener('input' , countryFil)
    countryFilter.addEventListener('keyup' , countryFil)
    document.addEventListener('DOMContentLoaded' , displayRowsonLoad)

    checkUI()
    }
    
init() 






// const countrySelect = document.getElementById("country-select");
// const options = countrySelect.options;


// for (let i = 1; i < options.length; i++) {
//   countryArr.push(options[i].value);
// }

// console.log(countryArr);


  

// submitbtn.addEventListener('click' , createRowElements)
// table.addEventListener('click' , removeRow)
// allClear.addEventListener('click' , totalClearRows)
// rankFilter.addEventListener('input' , rankFil)
// rankFilter.addEventListener("keyup", rankFil)
// nameFilter.addEventListener('input' , nameFil)
// nameFilter.addEventListener('keyup' ,nameFil)
// countryFilter.addEventListener('input' , countryFil)
// countryFilter.addEventListener('keyup' , countryFil)
// document.addEventListener('DOMContentLoaded' , displayRowsonLoad)

// checkUI()







/// 

/* Yes, you are correct. According to the HTML code you provided, there are two tr elements with the class name "each-player-row". However, the issue with the removal of rows seems to be related to the event listener setup.

In your JavaScript code, you have used indivrow.addEventListener('click', removeRow) to add the event listener for the "click" event on the .each-player-row element. However, since there are multiple tr elements with the class name "each-player-row", the event listener will only be attached to the first element that matches the selector .each-player-row. As a result, when you click on the "peekey" button in the second tr element, the event listener is not triggered, and the row is not removed.

To fix this issue, you can modify your event listener setup to add the event listener to each tr element individually. You can achieve this by using a loop or the forEach method. Here's an example using a loop:

javascript
Copy code
let allRows = document.querySelectorAll('.each-player-row');

allRows.forEach(row => {
    row.addEventListener('click', removeRow);
}); 

With this modification, the event listener will be attached to each tr element with the class name "each-player-row", and clicking on the "peekey" button in any of the rows will trigger the event listener and remove the respective row.


 /*  Here's an example of how you can modify your event listener setup to use event delegation:

javascript
Copy code
let table = document.getElementById('table');

table.addEventListener('click', function(event) {
    if (event.target.classList.contains('each-player-row')) {
        removeRow(event);
    }
});
In this example, the event listener is added to the table element, and the event object is used to determine which child element was clicked using event.target. If the clicked element has the class name "each-player-row", the removeRow function is called to remove the corresponding row.

With this modification, you don't need to add the event listener individually to each tr element. Instead, you can handle the click event on the parent table element and dynamically determine which child element was clicked based on the event target. This way, any new tr elements that are added dynamically in the future will also have the event listener applied automatically. */