$("#btnFizzBuzz").on("click", function () {

    //Step 1: Get the data
    let fizz = $("#fizzNum").val();
    let buzz = $("#buzzNum").val();

    if (fizz.length < 1 || buzz.length < 1) {
        alert("Something is amiss");
        return;
    }

    //Step 2:
    var arrResult = DoFizzBuzz(+fizz, +buzz);

    //Step 3: Output
    $("#output").html(arrResult.join(" | "));
});






