//CHECK THIS OUT...
//This code is validating user input by handling the keypress event.
//When a key is pressed it passes itself as an argument into the function and we can then check to see
//if it is an acceptable character
$(".numOnly").on("keypress", function (keyPressed) {        
    if (!(keyPressed.keyCode >= 48 && keyPressed.keyCode <= 57) || (keyPressed.keyCode >= 96 && keyPressed.keyCode <= 105)) {
        return false;
    };
      
});

function SunsetHillEx(buildings) {
    var errorMsg = "";
    var valid = true;

    for (let index = 0; index < buildings.length; index++) {

        //CHECK THIS OUT...
        //I am using the built in JS function isNaN to determine if the string can be turned into a number
        //If not we have an issue...
        if (isNaN(buildings[index])) {

            //CHECK THIS OUT...
            //I want to combine #hillsInput with 1 or 2 or 3 etc...
            //In order to do that I am using a template literal to merge the index variable to the hard coded
            //#hillsInput text.
            var value = $(`#hillsInput${index + 1}`).val();     

            //CHECK THIS OUT...
            //I am using a template literal again to compose the output
            errorMsg += `Your input in position ${index + 1}: ${value} is bad and needs to be fixed <br>`;
            $(`#hillsInput${index + 1}`).val("");
            valid = false;
        }
    }

    if (!valid) {

        //CHECK THIS OUT...
        //This is how I fire off a particular version of a SweetAlert alert window.
        //This is made possible because I am referencing a CDN in Index.Html

        Swal.fire({
            icon: 'error',
            title: 'Input Validation failed',
            html: errorMsg              
        })

        return;
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

    //CHECK THIS OUT...
    //Normally if we just printed an array it would use a comma as a default separator.
    //Because I am using a <br> tag to separate I want to join with nothing.
    return sunsetViews.join("");
}



