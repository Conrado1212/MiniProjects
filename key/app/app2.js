$("#pw").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#myButton").click();
    }
});

$("#myButton").click(function() {
  alert("Button code executed.");
});