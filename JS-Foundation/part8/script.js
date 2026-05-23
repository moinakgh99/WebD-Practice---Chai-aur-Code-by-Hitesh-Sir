// EXAMPLE 1

document.getElementById("changeTextButton").addEventListener('click', () => {
    let paragraph = document.getElementById("myParagraph")
    paragraph.textContent= "The Paragraph is Changed !!"
    
})


// Example 2

document.getElementById("highlightFirstCity").addEventListener('click', function() {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight")
})

// Example 3

document.getElementById("changeOrder").addEventListener('click', function() {
    let coffeeType = document.getElementById("coffeeType")
    coffeeType.textContent = "Expresso"
    coffeeType.style.backgroundColor = "blue";
    coffeeType.style.padding = "5px";
    coffeeType.style.marginBottom = "10px";
})


// Example 4

document.getElementById("addNewItem").addEventListener('click', function() {
    let newItem = document.createElement('li')
    newItem.textContent = "Eggs"

    document.getElementById("shoppingList").appendChild(newItem)
})


// Example 5

document.getElementById("removeLastTask").addEventListener('click', function() {
    let lastTtask = document.getElementById("taskList");
    lastTtask.lastElementChild.remove()
})


// Example 6

document.getElementById("clickMeButton").addEventListener('dblclick', function() {
    alert("Chai")
})


// example 7 

document.getElementById("teaList").addEventListener('click', function(event) {
    if(event.target && event.target.matches(".teaItem")){
        alert("You selected :" + event.target.textContent)
    } 
})


// Example 8

document.getElementById("feedbackForm").addEventListener('submit', function(event){
    event.preventDefault()
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById("feedbackDisplay").textContent = `Feedback is : ${feedback}`
})


// Example 9

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("domStatus").textContent = "DOM is loaded .."
})


// example 10
document.getElementById("toggleHighlight").addEventListener('click', function() {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight")
})