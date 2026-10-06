document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("domBtn").addEventListener("click", function(){
        const ho = document.getElementById("fname").value;
        const ten = document.getElementById("lname").value;
        document.getElementById("result").innerHTML = "Họ và tên: " + ho + " " + ten;
    });

    $("#jqueryBtn").click(function(){
        const ho = $("#fname").val();
        const ten = $("#lname").val();
        $("#result").text("Họ và tên: " + ho + " " + ten);
    });
});