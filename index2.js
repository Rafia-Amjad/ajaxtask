$(function(){
    $("#load").click(function(){
        $.get("index2.txt", function(Response){
            $("#result").empty();
            $("#result").append(Response);
        });
    });
});