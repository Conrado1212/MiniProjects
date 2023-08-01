//set inital amount
let count = 0;
//select value and buttons
const amount = document.querySelector('#amount');
const btns = document.querySelectorAll(".btn");
btns.forEach(function(btn){
btn.addEventListener("click",function(e){
    const style = e.currentTarget.classList;
    if(style.contains('decrease')){
        console.log(style);
        count--;
    }else if(style.contains('increase')){
        console.log(style);
        count++;
    }else{
        console.log(style);
        count = 0;
    }
    if(count>0){
        amount.style.color = "darkblue"
    }else if(count<0){
        amount.style.color = "crimson"
    }else{
        amount.style.color = "black"
    }
    
    amount.textContent = count;
});
});