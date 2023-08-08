//classList - show gets all classes
//contains check clasList for specific class
//ad add clas
//remove remove class
//toggle toggles class

const  navbtn = document.querySelector(".nav-btn");
const  links = document.querySelector(".links");


navbtn.addEventListener('click',function(){
   // console.log(links.classList);
    //console.log(links.classList.contains('random'));
    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links');
    // }else{
    //     links.classList.add('show-links');
    // }
    links.classList.toggle("show-links");
})