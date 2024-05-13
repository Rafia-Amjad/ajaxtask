$(function(){
$("#load").click(sendAjax)
});
function sendAjax(){
    console.log("Sending AJAX Request")
    //send request here
    $.get("students.txt",handleResponse)
    console.log("sent");
}
    function handleResponse(Response){
        console.log("Response Recieved");
        //console.log(Response); //print on console
        $("#result").empty();
        $("#result").append(Response); 
}
