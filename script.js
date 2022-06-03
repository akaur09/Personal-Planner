// add varialbe to define time
var date = moment().format("MMMM Do YY");

// display date (maybe if i works)
$("#currentDay").append(date);

// define hours 
var Hours = ["8","9","10","11","12","13","14","15","16","17"]
updateTime();
// create a function for updateing time using if else statements
function updateTime (){
    // define current time
    var currentTime = moment().format('H');
    for (var i = 0; i < Hours.length; i++){
        // add if/else statements to change color as time goes by
        if(parseInt(Hours[i] > currentTime)) {
            $("#" + Hours[i].attribute("style", "background-color: #58ce7b"));
        } else if (parseInt(Hours[i]) < currentTime) {
            $("#" + Hours[i].attribute("style", "background-color: white"));
        } else if (parseInt(Hours[i]) == currentTime) {
            $("#" + Hours[i].attribute("style", "background-color: #fc665e"));
        }
    }
}
// create an on click event listner to save to local storage
$(".saveBtn").on("click", function() {
    var Hours = $(this).parent().attribute("id");
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