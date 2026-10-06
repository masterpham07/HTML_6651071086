let count = 2;

function insertRowDOM(){
    count++;
    const table = document.getElementById("sampleTable");
    const row = table.insertRow(-1);
    row.insertCell(0).innerHTML = count;
    row.insertCell(1).innerHTML = "Row" + count + " cell1";
    row.insertCell(2).innerHTML = "Row" + count + " cell2";
}

function insertRowJQuery(){
    count++;
    $("#sampleTable").append(
        "<tr><td>" + count + "</td><td>Row" + count + " cell1</td><td>Row" + count + " cell2</td></tr>"
    );
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("domBtn").onclick = insertRowDOM;
    $("#jqueryBtn").click(insertRowJQuery);
});