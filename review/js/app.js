persons = [{
    id:1,
    name: "Susan Stons",
    job: "front-end dev",
    img:"https://www.course-api.com/images/people/person-1.jpeg",
    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
},
{
    id:2,
    name: "MIck Joke",
    job: "Back-end dev",
    img:"https://www.course-api.com/images/people/person-2.jpeg",
    text:"Lorem Ipsum is simply dummy text of the"
},
{
    id:3,
    name: "MIchael  Light",
    job: "full-stack-end dev",
    img:"https://www.course-api.com/images/people/person-3.jpeg",
    text:"Lorem Ipsum is simply dummy text of the"
},
{
    id:4,
    name: "Tom Green",
    job: "front-end dev",
    img:"img/person.jpg",
    text:"Lorem Ipsum is simply dummy text of the"
}


];

//select items 

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const desc = document.getElementById("desc");

const pervBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting reviewe

let currentItem = 0;

//load initial review

window.addEventListener('DOMContentLoaded',function(){
showP(currentItem);
});


//show person based on item

function showP(){
const item = persons[currentItem];
img.src = item.img;
author.textContent = item.name;
job.textContent = item.job;
desc.textContent = item.text;
}




//show next person
nextBtn.addEventListener('click',function(){
    currentItem++;
    console.log(currentItem);
    if(currentItem> persons.length-1){
        currentItem=0;
 }
    showP(currentItem);
});

//show previous person
pervBtn.addEventListener('click',function(){
    currentItem--;
    console.log(currentItem);
    if(currentItem< 0){
        currentItem=persons.length-1;
    }
    showP(currentItem);
});


randomBtn.addEventListener('click',function(){
    currentItem = Math.floor(Math.random() * persons.length);
    console.log(currentItem);
    showP(currentItem);
});