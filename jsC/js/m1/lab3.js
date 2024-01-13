// Create an images object that will be used to store the images. The object should have a list property, which will be an array of image objects and methods:
let images  = {
    //The object should have a list property
   list:[],
// contains - which takes as its argument the title of the image and returns true if the image is already placed in the list (otherwise it returns false)
contains: function(title){
    let val = false;
    for(image of this.list){
    if(image.title=== title){
        return val= true;
        break;
    }
   
}
return val;
},
// add – which takes three arguments (title, artist, and date) and creates a new object based on them and adds it to the list (if it has not already been added)
add: function(title,artist,date){
    if(!this.contains(title)){
        this.list.push(new Image(title, artist, date));
    }
},
// show - which displays all images on the list;
show: function(){
    for (var i = 0; i < images.list.length; i++){
        console.log("Title: "+images.list[i].title + " artist: " + images.list[i].artist + " date of creation: " + images.list[i].date);
        }
},
clear: function(){
    images.list.splice(0,images.list.length)
}
}



// clear – which removes all objects from the list.

// While creating an object, use the Image constructor prepared in the earlier task.
// let image = function(title, artist, date) {
  
   
//     this.title = title;
//     this.artist = artist;
//     this.date = date;
 
// };
// Test the script by calling the sequence:
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1503)
// -> Last Supper (Leonardo da Vinci, 1495)
// -> The Starry Night (Vincent van Gogh, 1889)
//images.clear();
images.show();