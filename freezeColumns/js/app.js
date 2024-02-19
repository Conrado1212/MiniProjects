function onElementAvailable(selector, callback) {
    const observer = new MutationObserver(mutations => {
      if (document.querySelector(selector)) {
        observer.disconnect();
        callback();
      }
    });
  
    observer.observe(document.body, { childList: true, subtree: true });
  }
  
  onElementAvailable("#xd", () => {
    console.log('xd');
  });


//    g = document.createElement('div');
//  g.setAttribute("id", "Div1");



 var newElement = document.createElement("div"); 
// to add a class: 
console.log(newElement);
// to add an id 
newElement.setAttribute("id", "xd"); 
console.log(newElement);
// to add it to the body: 
document.body.appendChild(newElement); 
console.log(newElement);
// or to add it to some element: 
document.getElementById("test").appendChild(newElement); 

document.getElementById('xd').style.cssText=
`
width: 100%;
height: 25px;
background-color: red;
`