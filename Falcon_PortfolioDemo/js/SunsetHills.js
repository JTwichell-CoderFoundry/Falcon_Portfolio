function SunsetHills(buildings) {
    //Set tallest to the smallest possible number
    let tallest = Number.MIN_VALUE;

    //Here I want to build a new array that contains just the building that can see the sunset
    let sunsetViews = new Array();

    for (var index = 0; index < buildings.length; index++) {
        if (buildings[index] > tallest) {
            tallest = buildings[index];
            sunsetViews.push(`The Building in position ${index} with height ${tallest} can see the sunset. <br>`);
        }
    }

    return sunsetViews.join("");
}
