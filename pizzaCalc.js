const ingredientsNeeded = document.getElementById("ingredientsNeeded")
// ingredientsNeeded.style.display = 'none'

const allInputs = document.getElementsByClassName('calc')
Array.from(allInputs).forEach(el => {
    el.addEventListener("input", calculateAmount);
});

button = document.getElementById('calculateQuantity')
button.addEventListener("click", calculateAmount);

function calculateAmount() {
    pizzas = document.getElementById('amountOfPizzas').value
    gramsDough = document.getElementById('pizzaSize').value
    waterContent = document.getElementById('waterContent').value

    var flour = Math.round((pizzas * gramsDough)/(1 + ( waterContent / 100) + 0.03 + 0.002), 1);
    var water = Math.round((flour * waterContent) / 100, 1);
    var salt = Math.round(0.03 * flour);
    var yeast = Math.round(0.002 * flour*10)/10;

    document.getElementById('flourNeeded').innerHTML = flour
    document.getElementById('waterNeeded').innerHTML = water
    document.getElementById('saltNeeded').innerHTML = salt
    document.getElementById('yeastNeeded').innerHTML = yeast

    // ingredientsNeeded.style.display = 'block'
}

calculateAmount()