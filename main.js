function multi(a, d) {
    for (var b = 1; b <= 20; b++) {
        document.getElementById(d).innerHTML += "<tr><td>" + a + " X " + b + "</td> <td> = </td>" + "<td>" + a * b + "</td></tr>";
    }
}

function getInputValue() {
    var inputVal = document.getElementById("myInput").value;
    multi(inputVal, 'demo1');
}        
