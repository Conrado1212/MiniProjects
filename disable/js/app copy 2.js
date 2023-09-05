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







const myTimeout = setTimeout(xd, 1000);

function xd(){
  for(var i = 1;i< 3;i++){
   if(document.getElementById("ctl00_PlaceHolderMain_subElems7909_repSubElems_ctl0"+i+"_CellDET_Att1").innerText==='test'){
    document.getElementById("ctl00_PlaceHolderMain_subElems7909_repSubElems_ctl0"+i+"_CellDET_Att2").style.background = "red";
    document.getElementById("ctl00_PlaceHolderMain_subElems7909_repSubElems_ctl0"+i+"_CellDET_Att2").style.pointerEvents = "none";
   }
  }
}

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


