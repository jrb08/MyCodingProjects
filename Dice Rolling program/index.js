

function rollDice(){

//use the document.getElementByID to transport the variables/ids in index.html 
const numOfDice = document.getElementById("numOfDice").value;
const diceResult = document.getElementById("diceResult");
const diceImages = document.getElementById("diceImages");

const values = [];//sets variable "values" to an empty array
const images = [];//sets variable "images" to an empty array.

    //construct a for loop that while i is less than variable numOfDice, the for loop increments by 1
    for(let i =0; i < numOfDice; i++){
            //set the variable "value" to the Math.floor using Math.random   
            const value = Math.floor(Math.random() * 6) + 1;//the math.random function uses the max range to choose from
            values.push(value); //use push (is a tool) for "values" and "images" arrays  
            images.push(`<img src="diceimages2/${value}.png" alt="Dice ${value}">`);
            } 

  //display the results of the above loop into/onto the page using .textContent and .innerHTML
  //diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');

}   