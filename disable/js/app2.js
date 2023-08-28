// $("#test tr").each(function() {
//     if ($(this).find("td:first-child").text() == 'Test') {
//         $(this).find("td:last-child").addClass('disabled'); 
//     }
//   });


  $("#test tr td:first-child input").on("keypress change keyup",function() {
    if ($(this).val() == 'test') {
        $(this).find("td:last-child input").addClass("disabled");
    }
  });


//   $("#ctl00_PlaceHolderMain_subElems7909_repSubElems_tblData tr").on("keypress change keyup",function(){

//     if($(this).val() == "test")
//     {
//         $(this).find("td:last-child").addClass('disabled'); 
//     }else{
//         return false;
//     }
//   });


//$("#ctl00_PlaceHolderMain_subElems7909_repSubElems_tblData tr td:first-child").text()
//$("#ctl00_PlaceHolderMain_subElems7909_repSubElems_tblData tr td:first-child").val()