// $(".input").on("keypress change keyup",function(){
//     var row = $(this).closest("tr");
//   //  console.log(row);
//     if($(this).val() === "test")
//     {
//      // $(this).parent().parent().find(".input").not($(this)).prop("disabled",true);
//      row.find(".input").not($(this)).prop("disabled",true);
//     }
//     else
//     {
//       $(this).parent().parent().find(".input").prop("disabled",false);
//     }
//  })


//  $(".input").on("keypress change keyup",function(){
//   var row = $(this).closest("tr");
// //  console.log(row);
//   if($(this).val() === "test")
//   {
//    // $(this).parent().parent().find(".input").not($(this)).prop("disabled",true);
//    row.find(".input").eq(1).prop("disabled",true);
//   }
//   else
//   {
//     $(this).parent().parent().find(".input").prop("disabled",false);
//   }
// })


// $(".input").eq(0).on("keypress change keyup",function(){
//   var row = $(this).closest("tr");
// //  console.log(row);
//   if($(this).val() === "test")
//   {
//    // $(this).parent().parent().find(".input").not($(this)).prop("disabled",true);
//    row.find(".input").eq(1).prop("disabled",true);
//   }
//   else
//   {
//     $(this).parent().parent().find(".input").prop("disabled",false);
//   }
// })


// $("#test tr td:first-child .input").on("keypress change keyup",function(){
//   var row = $(this).closest("tr");
// //  console.log(row);
//   if($(this).val() === "test")
//   {
//    // $(this).parent().parent().find(".input").not($(this)).prop("disabled",true);
//    row.find(".input").eq(1).prop("disabled",true);
//   }
//   else
//   {
//     $(this).parent().parent().find(".input").prop("disabled",false);
//   }
// })

$("#test tr td:first-child").each(function() {
    if ($(this).text() == 'Test') {
        $(this).find("td:eq(1)").addClass('disabled'); 
    }
  });


//  $(".input").on("keypress change keyup",function(){
//   var row = $(this).closest("td");
// //  console.log(row);
//   if($(this).val() === "test")
//   {
//    // $(this).parent().parent().find(".input").not($(this)).prop("disabled",true);
//    row.find("td:first-child").not($(this)).prop("disabled",true);
//   }
//   else
//   {
//     $(this).parent().parent().find(".input").prop("disabled",false);
//   }
// })


//  $(".input").on("keypress change keyup",function(){
//     if($(this).val() === "test"){
//         $("table tr td:nth-child(-2n + 4)").style("dispaly",none);
//     }else{
//         $("table tr td:nth-child(-2n + 4)").prop("disabled",false);
//     }

// })

//td:eq(1)"


