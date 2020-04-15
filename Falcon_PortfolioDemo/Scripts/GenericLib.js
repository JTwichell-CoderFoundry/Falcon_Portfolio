 
function DoFizzBuzz(fizzNum, buzzNum) {
    let arrOutput = new Array();

    //Step 2: Do something with it
    for (var loop = 1; loop <= 100; loop++) {
        if ((loop % fizzNum === 0) && (loop % buzzNum === 0)) {
            arrOutput.push("<span class='fizzbuzz'>FIZZ-BUZZ</span>");
        }
        else if (loop % fizzNum === 0) {
            arrOutput.push("<span class='fizz'>FIZZ</span>");
        }
        else if (loop % buzzNum === 0) {
            arrOutput.push("<span class='buzz'>BUZZ</span>");
        }
        else {
            arrOutput.push(loop);
        }
    }

    return arrOutput;  
}

function DoSOAF(arrHeights) {
    var arrResult = new Array();

    //...Algo specific code here...

    return arrResult;
}

function DoTacoCat(word) {       
    let palindrome = false;

    return palindrome;
}

function DoSunsetHills(buildingHeights) {
    var sunsetViewers = new Array();

    return sunsetViewers;
}



//<script>
//    $("#btnTacoCat").on("click", function () {
//        //Step 1:
//        let word = String($("#txtTacoCat").val()).toLowerCase();

//            //Step 2B:
//            var revWord = "";

//            for (var loop = word.length - 1; loop >= 0; loop--) {
//        revWord += word[loop];
//            }

//            //Step 3: Output
//            $("#tcOutput").text(`The reverse of ${word} is ${revWord}`);
//            if (word === revWord)
//                $("#tcOutput").append(`Therefore ${word} is a Palidrome`);
//            else
//                $("#tcOutput").append(`Therefore ${word} is not a Palidrome`);
//        });

//    </script>
//    <script>
//        $("#btnSOAF").on("click", function () {
//            let k = Number($("#k").val());

//            let myArray = new Array();
//            myArray.push(Number($("#soafInput1").val()));
//            myArray.push(Number($("#soafInput2").val()));
//            myArray.push(Number($("#soafInput3").val()));
//            myArray.push(Number($("#soafInput4").val()));
//            myArray.push(Number($("#soafInput5").val()));

//            //k = 14
//            //15 6 8 9 4

//            let target = 0;
//            let found = false;

//            //loop over each item in the array 1 at a time
//            for (var index = 0; index < myArray.length; {
//            //Determine what number you need to solve for the given K...
//            //find k - myArray[index]
//            target = k - myArray[index];

//                //arr.indexOf(searchElement[, fromIndex])
//                //if (myArray.indexOf(target, index + 1) > 0) {
//                if (myArray.indexOf(target, index + 1) >= 0) {
//            found = true;
//                    break;
//                }
//            }

//            if (found)
//                $("#soafOutput").html(`A K value of ${k} was found in the array`);
//            else
//                $("#soafOutput").html(`A K value of ${k} was NOT found in the array`);

//        });
//    </script>
//    <script>
//        $("#hillsCode").hide();

//        $("#btnRunHills").on("click", function () {

//            let myArray = new Array();
//            myArray.push(Number($("#hillsInput1").val()));
//            myArray.push(Number($("#hillsInput2").val()));
//            myArray.push(Number($("#hillsInput3").val()));
//            myArray.push(Number($("#hillsInput4").val()));
//            myArray.push(Number($("#hillsInput5").val()));
//            myArray.push(Number($("#hillsInput6").val()));

//            //CHECK THIS OUT...
//            //This is an example of how to call a named function "SunsetHillEx" and pass it an argument.
//            $("#hillsOutput").html(SunsetHillEx(myArray));
//        });

//        $("#btnClearHills").on("click", function () {
//            //$("#hillsInput1").val("");
//            //$("#hillsInput2").val("");
//            //$("#hillsInput3").val("");
//            //$("#hillsInput4").val("");
//            //$("#hillsInput5").val("");
//            //$("#hillsInput6").val("");
//            //$("#hillsInput1, #hillsInput2, #hillsInput3, #hillsInput4, #hillsInput5, #hillsInput6").val("");
//            $(".clearMe").val("");
//            $("#hillsOutput").text("");
//        });

//        $("#btnShowHills").on("click", function () {
//            //CHECK THIS OUT...
//            //Here I am using the built in toggle function to switch my div from visible to hidden
//            $("#hillsCode").toggle();

//            //CHECK THIS OUT...
//            //Here I am using a ternary operator to determine what the button text should be
//            let btnText = $(this).text();
//            $(this).text($(this).text().startsWith("Show") ? btnText.replace("Show", "Hide") : btnText.replace("Hide", "Show"));
//        });
//    </script>
