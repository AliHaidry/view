
// log-out functionality 

$(document).ready(function(){
  ($("div.button-o").on("click",function(){ 
    $(".con-signout").slideToggle();
  }));
});


// check mark functionality
$(function(){
    $("#input-group-prepend-one").on("click",function(){
      $("input[type='text-1']").val( "My finished task" ).toggleClass("completed_task");
    });
});


// text mark functionality
$(function(){
  $("#input-group-one").on("click",function(){
    $("input[type='text-2']").val( "Someone else's finished" ).toggleClass("completed_task");
  });
});


// new add task functionality.

$(document).ready(function () {
  $("form#main_input_box").submit(function (event) {
    event.preventDefault();
    var checkBox =
    "<div class='checkbox-one'><label><input type='checkbox' class='pull-right'></label></div>";
    $(".list_of_items").prepend(
      "<li class='list-group-item'>" +
        "<div class='text_holder'>" +
        $("#custom_textbox").val()  +
        "</div>" +
        checkBox +
        "</li>"
    );
    $("#custom_textbox").val("");
  });


// task created complete toggle functionality
  

  $(".list_of_items").on("click", ":checkbox", function () {
    $(this).closest("li").toggleClass("completed_item");
  });

});



// task selected remove functionaltiy.

$(function(){
    $(".button-rm").on("click",function(){
        $(".completed_item").fadeOut("slow", function(){
          $(this).remove()
        });
    });
});