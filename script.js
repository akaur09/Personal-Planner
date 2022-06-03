// add varialbe to define time
var date = moment().format("MMMM Do YY");

// display date (maybe if i works)
$("#currentDay").append(date);

// define hours 
var Hours = ["8","9","10","11","12","13","14","15","16","17"]
updateTime();
// set time to update color blocks
setInterval(updateTime, 60000);
// create a function for updateing time using if else statements
function updateTime (){
    $(".time-block").each(function(){
        // define current time
        var currentTime = parseInt(moment().format('H'));
        var blockTime = parseInt($(this).attr("id").replace("hour-", ""));
        // remove added classes to past, present and future
        $(this).removeClass("past present future");
        // add if/else statements to change color as time goes by
        // fix to change color
        if((blockTime > currentTime)) {
            $(this).addClass("future")
        } else if ((blockTime) < currentTime) {
            $(this).addClass("past");
        } else if ((blockTime) == currentTime) {
            $(this).addClass("present");
        }
      
    })

}
// create an on click event listner to save to local storage
$(".saveBtn").on("click", function() {
    var Hours = $(this).parent().attr("id");
    var textContent = $("input").val().trim();

    localStorage.setItem(Hours,textContent);
    console.log ("added Hours and textContent");
});
// add function to get each hour (child) and set it into the parent
$("#8").children("input").val(localStorage.getItem("8am"));
$("#9").children("input").val(localStorage.getItem("9am"));
$("#10").children("input").val(localStorage.getItem("10am"));
$("#11").children("input").val(localStorage.getItem("11am"));
$("#12").children("input").val(localStorage.getItem("12pm"));
$("#13").children("input").val(localStorage.getItem("1pm"));
$("#14").children("input").val(localStorage.getItem("2pm"));
$("#15").children("input").val(localStorage.getItem("3pm"));
$("#16").children("input").val(localStorage.getItem("4pm"));
$("#17").children("input").val(localStorage.getItem("5pm"));