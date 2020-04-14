$(function () {

    //$(".numOnly").on("keypress", function (e) {        
    //    if (!(e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
    //        return false;
    //    };
      
    //});

  

})

function SunsetHillEx(buildings) {
    var errorMsg = "";
    var valid = true;

        for (let index = 0; index < buildings.length; index++) {
            if (isNaN(buildings[index])) {
                var value = $(`#hillsInput${index + 1}`).val();     
                errorMsg += `Your input in position ${index + 1}: ${value} is bad and needs to be fixed <br>`;
                $(`#hillsInput${index + 1}`).val("");
                valid = false;
            }
        }

        if (!valid) {
            Swal.fire({
                icon: 'error',
                title: 'Input Validation failed',
                html: errorMsg              
            })

            return 
        }

        //Set tallest to the smallest possible number
        let tallest = Number.MIN_VALUE;

        //Here I want to build a new array that contains just the building that can see the sunset
        let sunsetViews = new Array();

        for (let index = 0; index < buildings.length; index++) {
            if (buildings[index] > tallest) {
                tallest = buildings[index];
                sunsetViews.push(`The Building in position ${index} with height ${tallest} can see the sunset. <br>`);
            }
        }

        return sunsetViews.join("");
}



