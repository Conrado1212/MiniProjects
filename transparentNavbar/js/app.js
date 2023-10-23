
var menu = document.getElementById("menu");
// console.log(menu);
var tab = menu.getElementsByClassName("tab");
// for (var i = 0; i < tab.length; i++) {
//     tab[i].addEventListener("click",function(){
//         var current = document.getElementsByClassName("active");
//         console.log(current);
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }


window.addEventListener('load',function(){
    $('#menu li').click(function () {
        $('#menu li').removeClass('active');

      $(this).addClass('active');
    })
})


// $(function() { 
//   //for bootstrap 3 use 'shown.bs.tab' instead of 'shown' in the next line
//   $('a[data-toggle="tab"]').on('shown', function (e) {
//     //save the latest tab; use cookies if you like 'em better:
//     localStorage.setItem('lastTab', $(e.target).attr('id'));
//   });

//   //go to the latest tab, if it exists:
//   var lastTab = localStorage.getItem('lastTab');
//   if (lastTab) {
//       $('#'+lastTab).tab('show');
//   }
// });


// get the actual pathname:
var path = location.pathname;
// filter menu items to find one that has anchor tag with matching href:
$('#menu li').filter(function(){
    return '/' + $('a', this).attr('href') === path;
// add class active to the item:
}).addClass('active');

function menuU(){
    var toggleMenuU = document.querySelector('.menuU');
    //console.log(toggleMenuU);
    toggleMenuU.classList.toggle('active2');
}


// document.addEventListener("click", function(e){
//     var toggleMenuU = document.querySelector('.menuU');
//     var toggleMenuU2 = document.querySelector('.fa-regular.fa-user');
//     console.log(e.target);
//     if(e.target !== toggleMenuU &&   !toggleMenuU.contains(e.target)  &&  e.target !==toggleMenuU2){
//     toggleMenuU.classList.remove('active2');
//     console.log(e.target);

// }
// console.log(e.target);
// });

document.addEventListener("click", function(e){
    
    var MenuU = document.querySelector('.menuU.active2');
    var toggleMenuU2 = document.querySelector('.fa-regular.fa-user');
    console.log(e.target);
    if(typeof(MenuU) !='undefined' && MenuU !=null){
    if(e.target !==MenuU && e.target !==toggleMenuU2){
        MenuU.classList.remove('active2');
       // toggleMenuU.style.visibility = "hidden";
        console.log(e.target);
        //&& e.target  !==toggleMenuU2
       // console.log(toggleMenuU.classList.contains('active2'));
       //&& toggleMenuU.classList.contains('active2') 
       //check tomorrow if contains will be works for this shit
    }
    }
});


var xd = document.getElementById('w3review').innerHTML
console.log(xd);