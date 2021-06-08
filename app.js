var x = document.getElementById("one1");
var y = document.getElementById("two2");
var z = document.getElementById("three3");

function one() {


    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
    }
}

function two() {
    if (y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none";
        z.style.display = "none";
    } else {
        y.style.display = "none";
        x.style.display = "none";
        z.style.display = "none";
    }
}

function three() {
    if (z.style.display === "none") {
        z.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";
    } else {
        z.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
    }
}