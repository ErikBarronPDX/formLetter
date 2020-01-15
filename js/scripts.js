$(document).ready(function(){
  $("#formOne").submit(function(event){
    var formName = $("input#formName").val();
    var formDate = $("input#formDate").val();

    $(".formName").text(formName);
    $(".formDate").text(formDate);

    $("#letter").show();

    event.preventDefault();
  })
})