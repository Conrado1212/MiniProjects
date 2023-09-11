
var menu = document.getElementById("menu");
console.log(menu);
var tab = menu.getElementsByClassName("tab");
for (var i = 0; i < tab.length; i++) {
    tab[i].addEventListener("click",function(){
        var current = document.getElementsByClassName("active");
        console.log(current);
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}