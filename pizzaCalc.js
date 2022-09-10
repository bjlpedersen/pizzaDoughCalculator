const ingredientsNeeded = document.getElementById("ingredientsNeeded")
ingredientsNeeded.style.display = 'none'




button = document.getElementById('calculateQuantity')
button.addEventListener("click", calculateAmount);

function calculateAmount() {
    pizzas = document.getElementById('amountOfPizzas').value
    gramsDough = document.getElementById('pizzaSize').value
    waterContent = document.getElementById('waterContent').value
    // document.getElementById('amountOfPizzas').value = ''
    // document.getElementById('pizzaSize').value = ''
    // document.getElementById('waterContent').value = ''

    var flour = Math.round((pizzas * gramsDough)/(1 + ( waterContent / 100) + 0.03 + 0.002), 1);
    var water = Math.round((flour * waterContent) / 100, 1);
    var salt = Math.round(0.03 * flour);
    var yeast = Math.round(0.002 * flour*10)/10;

    document.getElementById('flourNeeded').innerHTML = flour
    document.getElementById('waterNeeded').innerHTML = water
    document.getElementById('saltNeeded').innerHTML = salt
    document.getElementById('yeastNeeded').innerHTML = yeast

    ingredientsNeeded.style.display = 'block'

}