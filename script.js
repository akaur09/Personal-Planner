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
            $("#" + Hours[i].attribute("style", "background-color: lightgray"));
        } else if (parseInt(Hours[i]) == currentTime) {
            $("#" + Hours[i].attribute("style", "background-color: #fc665e"));
        }
    }
}
// create an on click event listner to save to local storage
// add function to get each hour (child) and set it into the parent