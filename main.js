document.getElementById("area").addEventListener("click", trapezoidArea)

function trapezoidArea() {
    let b1 = Number(document.getElementById("b1").value);
    let b2 = Number(document.getElementById("b2").value);
    let h = Number(document.getElementById("h").value);

    let area = ((b1 + b2) / 2) * h;

    document.getElementById("output").innerHTML = area;

}