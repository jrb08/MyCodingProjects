//Counter Program

//welcome in those buttons from the front lobby to this process room; document.getElementById, will you go grab decreaseBtn for me?"
const decrease= document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn =document.getElementById('increaseBtn');
const countLabel = document.getElementById("countLabel");
let count = 0;


increaseBtn.onclick=function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick=function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick=function(){
    count=0;
    countLabel.textContent = count;
}