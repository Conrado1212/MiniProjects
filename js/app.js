//create array colors 
const colors = ["green","red", "rgba(133,122,200)","#f15025"];
//button to change color
const btn = document.getElementById('btn');
//color in the span
const color = document.querySelector('.color');

btn.addEventListener('click',function(){
   // console.log(document.body);
   //get random number between 0-3 colors[3]


   const randomNumber = getRandomNumber();
    console.log(randomNumber);
   document.body.style.backgroundColor = colors[randomNumber];
   color.textContent = colors[randomNumber];



});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}