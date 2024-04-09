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


$("#test tr td:first-child .input").on("keypress change keyup",function(){
  var row = $(this).closest("tr");
//  console.log(row);
  if($(this).val() === "test")
  {
   // $(this).parent().parent().find(".input").not($(this)).prop("disabled",true);
   row.find(".input").eq(1).prop("disabled",true);
  }
  else
  {
    $(this).parent().parent().find(".input").prop("disabled",false);
  }
})


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

function sleepAndReturnTrue() {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(true);
      }, 3000); // Czas oczekiwania w milisekundach (3 sekundy)
  });
}

// Przykład użycia:
(async () => {
  const result = await sleepAndReturnTrue();
  console.log(result); // Wyświetli "true" po 3 sekundach
})();
