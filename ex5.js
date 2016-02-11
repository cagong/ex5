//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function () {
    console.log('ready');

    $("#date").datepicker();
    $("#date2").datepicker();

    document.f.onsubmit = processForm;
    document.f.onreset = resetPage;

    var SelectedDates = {};

    function processForm() {
        //variables
        var userDate = document.f.date.value;
        //var userColor = document.f.userColor.value;

        //alerts
        if (userDate == "") {
            alert("Missing Date!");
        } /*else if (userColor == "") {
            alert("Missing Color!");
        }*/
        else {
            //changing calendar color goes hereee 
            console.log('submitted');
            $("#date2").datepicker("destroy");
            
            //$('.highlighted a').css('background-color: ');
            //$('.highlighted a').css('background-color', userColor + " !important;");
            
            SelectedDates[new Date(userDate)] = new Date(userDate);

            $("#date2").datepicker({
                beforeShowDay: function (date) {
                    var Highlight = SelectedDates[date];
                    if (Highlight) {
                        return [true, "highlighted", "Highlight"];
                    } else {
                        return [true, '', ''];
                    }
                }
            });


            return false;
        }
    }

    function resetPage() {
        //reset the field

        $("#date2").datepicker("destroy");
        $("#date2").datepicker();
        SelectedDates = [];

        userDate.value = "";
        //userColor.value = "";
        return false;
    }   

})