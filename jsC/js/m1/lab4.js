// Complement the images object from the previous task with two new methods (without rewriting the whole object):
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
    //  for (var i = 0; i < images.list.length; i++){
    //      console.log("Title: "+images.list[i].title + " artist: " + images.list[i].artist + " date of creation: " + images.list[i].date);
    //      }
    console.log(images.list);
  //  images.list.forEach(image => {console.log(`${image.list.title} (${image.list.artist}, ${image.list.date})`)});
},
show:  function() {
    console.log(`${this.title} (${this.artist}, ${this.date})`);
},
show: function(title) {
    for(image of this.list) {
        image.show();
    }
},

// clear – which removes all objects from the list.
clear: function(){
    images.list.splice(0,images.list.length)
},
// edit - which takes three arguments (title, artist, and date) and if it finds an image with the given title in the list, it changes its artist and date properties;
edit: function(title,artist,date){
    if(this.contains(title)){
        this.list.edit();
}
},
edit: function(title, artist, date) {
    for(image of this.list) {
        if(image.title === title) {
            image.artist = artist;
            image.date = date;
            break;
        }
    }
},
// delete - which takes the title argument and if it finds a picture with this title in the list, it deletes it (to delete a list element, use the splice method)
delete: function(title){
    if(this.contains(title)){
        this.list.splice();
}
},
delete: function(title) {
    for(let i=0; i < this.list.length; i++) {
        if(this.list[i].title === title) {
            this.list.splice(i,1);
            break;
        }
    }
}
}
let image = function(title, artist, date) {
  
   
    this.title = title;
   this.artist = artist;
     this.date = date;
 
 }

// delete - which takes the title argument and if it finds a picture with this title in the list, it deletes it (to delete a list element, use the splice method)
// Additionally, add a show method to the Image constructor, which will display information about this one image.
//  Do not rewrite the constructor. Use prototypes for this purpose. Then modify the show method of the images object so that it uses the newly created single image show method to display the information.

// Test the script by calling the sequence:
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
images.delete('The Last Supper');
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1504)
// -> The Starry Night (Vincent van Gogh, 1889)