function changeStyleDOM(){
    const p = document.getElementById("text");
    p.style.fontSize = "28px";
    p.style.fontFamily = "Arial";
    p.style.color = "blue";
}
function changeStyleJQuery(){
    $("#text").css({
        "font-size":"28px",
        "font-family":"Arial",
        "color":"red"
    });
}
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("domBtn").addEventListener("click", changeStyleDOM);
    $("#jqueryBtn").on("click", changeStyleJQuery);
});