var trapezoidArea = function () {
    var base_1 = parseFloat(document.getElementById('base_1').value);
    var base_2 = parseFloat(document.getElementById('base_2').value);
    var height = parseFloat(document.getElementById('height').value);

    var output = document.getElementById('output');

    if (isNaN(base_1) || isNaN(base_2) || isNaN(height)) {
        output.textContent = "**You did not enter three numbers!**";
    } else {
        var area = ((base_1 + base_2) / 2) * height;
        output.textContent = "The area of the trapezoid is = " + area;
    }
};