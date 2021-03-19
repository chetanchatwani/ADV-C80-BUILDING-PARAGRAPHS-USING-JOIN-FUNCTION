function getParagraph1() {
    var inputs = [];
    for(var i=1;i<=6;i++) {
        inputs.push(document.getElementById("paralal_input_box_" + i).value);
    }
    inputs.join(". ");
    document.getElementById("showParagraph1").innerHTML = inputs.join(". ");
}

function getParagraph2() {
    var inputs = [];
    for(var i=7;i<=12;i++) {
        inputs.push(document.getElementById("paralal_input_box_" + i).value);
    }
    inputs.join(". ");
    document.getElementById("showParagraph2").innerHTML = inputs.join(". ");
}