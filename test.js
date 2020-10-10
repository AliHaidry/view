$(function(){
    $("h1").css("color","red");
});

/*
$(function(){
    $(".button-rm").on("click",function(){
        $(".input-group").slideToggle(1000);
    });
});
*/

$(function(){
    $("div.input-group-append").on("click",function(event){
        $("input[type='text-1']").val( "This shall pass too" ).css("text-decoration","line-through");
        event.stopPropagation();
    });
});

$(function(){
    $("div.input-group-append-test").on("click",function(){
        $("input[type='text-2']").val( "Its okay!" ).css("text-decoration","line-through");
    });
});

$(function(){
    $("div.input-group-text-test").on("click",function(){
        $("input[type='text-3']").val( "My finished Task" ).css("text-decoration","line-through");
    });
});

$(function(){
    $("div.button-rm").on("click",function(){
        $("input[type='text-1']").val("My finished Task").remove();
        $("input[type='text-2']").val("My finished Task").remove();
        $("input[type='text-3']").val("My finished Task").remove();
    });
});