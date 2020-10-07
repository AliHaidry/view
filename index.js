/*
$(document).ready(function(){
    $("h1").css("color","red");
});
*/

// log-in functionality 

$(document).ready(function(){
    $(".button-l").click(function(){
      $(".con-signup").slideUp(350, function(){
    });
    $(".con-signin").slideDown(350, function(){
    });
    });
});



// sign-up functionality


$(document).ready(function(){
    $(".button-s").click(function(){
      $(".con-signin").slideUp(350, function(){
    });
    $(".con-signup").slideDown(350, function(){
    });
    });
});

