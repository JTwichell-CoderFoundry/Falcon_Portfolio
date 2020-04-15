$("#btnFizzBuzz").on("click", function () {

    //Step 1: Get the data
    let fizz = Number($("#fizzNum").val());
    let buzz = Number($("#buzzNum").val());
    
    //Step 2:
    var arrResult = DoFizzBuzz(fizz, buzz);

    //Step 3: Output
    $("#output").html(arrResult.join(" | "));
});






