var inputs = [];
var inputs2 = [];

function para1() {
    document.getElementById("paragraph1").innerHTML = " "
    for (i = 1; i <= 10; i++) {
        inputs.push(document.getElementById("para1_input_box" + i).value);
    }
    document.getElementById("paragraph1").innerHTML = inputs.join("");
}

function para2() {
    document.getElementById("paragraph2").innerHTML = " ";
    for (j = 1; j <= 10; j++) {
        inputs2.push(document.getElementById("para2_input_box" + j).value);
    }
    document.getElementById("paragraph2").innerHTML = inputs2.join("");
}