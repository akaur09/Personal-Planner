// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
$(document).ready(function(){
    $("#currentday").text(moment().format("dddd, MMMM Do YYYY"));

    $(".savePlan").on("click", function(){
        var time= $(this).parent().attr("id");
        var text = $(this).siblings(".description").val();
        console.log(this);
        localStorage.setItem(time,text);
    })
    $("#8.description").val(localStorage.getItem("#8"));
    $("#9.description").val(localStorage.getItem("#9"));
    $("#10.description").val(localStorage.getItem("#10"));
    $("#11.description").val(localStorage.getItem("#11"));
    $("#12.description").val(localStorage.getItem("#12"));
    $("#13.description").val(localStorage.getItem("#13"));
    $("#14.description").val(localStorage.getItem("#14"));
    $("#15.description").val(localStorage.getItem("#15"));
    $("#16.description").val(localStorage.getItem("#16"));
    $("#17.description").val(localStorage.getItem("#17"));

    function timeTrack(){
        var currenthour = moment().hour();
        
        $(".time-block").each(function(){
            var hourblock =parseInt($(this).attr("id").split("hour")[1]);
            console.log(hourblock, currenthour)

            if (hourblock < currenthour){
                $(this).addClass("past");
                // $(this).addClass("present");
                // $(this).addClass("future");
            } else if (hourblock > currenthour){
                // $(this).addClass("past");
                // $(this).addClass("present");
                $(this).addClass("future");
            } else {
                // $(this).addClass("past");
                $(this).addClass("present");
                // $(this).addClass("future");
            }
        })
    }
    timeTrack();
})